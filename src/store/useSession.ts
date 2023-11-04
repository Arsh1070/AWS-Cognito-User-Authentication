//import { Auth, Hub } from 'aws-amplify';

import { Auth } from 'aws-amplify';
import { useCallback, useLayoutEffect, useState } from 'react';

import {
  deleteLocaleStorageData,
  setLocaleStorageData,
} from '../utils/storageService';

interface authObj {
  isAuthenticated: boolean;
  user: any;
  error: boolean;
  stage: number;
  isLoading: boolean;
  signIn: () => void;
  signOut: () => void;
}

const _isAuthenticated = (user: any) => {
  if (
    !user ||
    !user.signInUserSession ||
    !user.signInUserSession.accessToken.jwtToken
  ) {
    return false;
  }

  const session = user.signInUserSession;
  const isValid = session.isValid() || false;

  //const sessionExpiry = new Date(session.accessToken.payload.exp * 1000);
  const sessionExpiry = new Date(session.accessToken.getExpiration() * 1000);
  const isExpired = new Date() > sessionExpiry;

  return isValid && !isExpired;
};

const useSession = (): authObj => {
  const [stage, setStage] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null); // cognito user
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [error, setError] = useState(false);

  const refreshState = useCallback(async () => {
    setStage(1);
    setLoading(true);
    //  deleteData();

    Auth.currentAuthenticatedUser()
      .then((user) => {
        setLoading(false);
        setStage(2);
        setUser(user);
        setIsAuthenticated(_isAuthenticated(user));
        setError(false);
        setLocaleStorageData(
          'accessToken',
          user?.signInUserSession?.accessToken?.jwtToken,
        );
        setLocaleStorageData(
          'refreshToken',
          user?.signInUserSession?.refreshToken?.token,
        );
      })
      .catch((err) => {
        setLoading(false);
        setStage(3);
        /* logger.error('Error authenticating user', err); */
        setIsAuthenticated(false);
        deleteLocaleStorageData();
        if (err === 'not authenticated') {
          setError(false);
        } else {
          setError(err);
        }
      });

    return () => {
      setStage(0);
      setLoading(false);
    };
  }, []);

  // Make sure our state is loaded before first render
  useLayoutEffect(() => {
    if (!user) {
      refreshState();
    }
  }, [refreshState, user]);

  const signIn = useCallback(() => {
    Auth.federatedSignIn(/*{ provider: 'COGNITO' }*/).catch((err) => {
      setError(err);
    });
  }, []);

  const signOut = useCallback(() => {
    Auth.signOut()
      .then((_) => refreshState())
      .catch((err) => {
        setError(err);
      });
  }, [refreshState]);

  return {
    isAuthenticated,
    user,
    error,
    signIn,
    signOut,
    stage,
    isLoading,
  };
};

export default useSession;

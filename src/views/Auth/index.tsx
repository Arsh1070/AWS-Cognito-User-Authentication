import { Authenticator } from '@aws-amplify/ui-react';
import dynamic from 'next/dynamic';

const CustomAuthComponent = dynamic(() => import('./customAuth'));

const AuthComponent: React.FC = () => {
  return (
    <Authenticator.Provider>
      <CustomAuthComponent />
    </Authenticator.Provider>
  );
};

export default AuthComponent;

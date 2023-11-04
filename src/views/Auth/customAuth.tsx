import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

const CustomAuthComponent: React.FC = () => {
  const router = useRouter();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  if (authStatus === 'authenticated') {
    router.push('/home');
  }
  return (
    <div style={{ marginTop: '40px' }}>
      <Authenticator />
    </div>
  );
};

export default CustomAuthComponent;

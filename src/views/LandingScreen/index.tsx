import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import useSession from '@/src/store/useSession';

import styles from '../../styles/Home.module.css';

const CustomHeader = dynamic(() => import('@/src/layouts/header'));
const MetaData = dynamic(() => import('@/src/components/metadata'));

const LandingScreen: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { isAuthenticated } = useSession();

  if (isAuthenticated) {
    router.push('/home');
  }
  return (
    <>
      <CustomHeader />
      <div className={styles.container}>
        <MetaData
          title={'Landing Page'}
          description={'Welcome at AWS Cognito User Authentication APP!'}
        />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome at AWS Cognito User Authentication APP!
          </h1>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h4 style={{ color: 'red' }}>
                Click on SignUp or SignIn button in above navbar &rarr;
              </h4>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingScreen;

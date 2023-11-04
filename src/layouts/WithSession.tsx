import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { SessionProvider } from '../store/SessionContext';
import useSession from '../store/useSession';

const CustomHeader = dynamic(() => import('./header'));
const Footer = dynamic(() => import('./footer'));

interface FuncProps {
  requireSession?: boolean;
  showHeader?: boolean;
  children: React.ReactNode;
}

const WithSession: React.FC<FuncProps> = ({
  requireSession,
  showHeader,
  children,
}) => {
  const router = useRouter();
  const session = useSession();

  if (requireSession) {
    if (session.stage < 2) {
      return <h5>Loading...</h5>;
    } else if (session.stage == 2) {
      if (session.user == null) {
        return <h5>Loading...</h5>;
      }
    } else if (session.stage == 3) {
      router.push('/');
    }
  }

  return (
    <SessionProvider value={{ session: session }}>
      {showHeader && <CustomHeader />}
      {children}
      <Footer />
    </SessionProvider>
  );
};

export default WithSession;

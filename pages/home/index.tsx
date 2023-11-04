import { NextPage } from 'next';

import WithSession from '@/src/layouts/WithSession';

import HomeComponent from '../../src/views/Home';

const LandingScreen: NextPage = () => {
  return (
    <WithSession requireSession={true} showHeader={true}>
      <HomeComponent />;
    </WithSession>
  );
};

export default LandingScreen;

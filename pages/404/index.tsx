import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const NotFound = dynamic(() => import('@/src/views/NotFound'));

const FourOFourPage: NextPage = () => {
  return <NotFound />;
};

export default FourOFourPage;

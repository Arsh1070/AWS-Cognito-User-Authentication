import dynamic from 'next/dynamic';

const ServerError = dynamic(() => import('@/src/views/ServerError'));

const ErrorPage = () => {
  return <ServerError />;
};

export default ErrorPage;

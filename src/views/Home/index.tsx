import dynamic from 'next/dynamic';

import styles from '../../styles/Home.module.css';

const MetaData = dynamic(() => import('@/src/components/metadata'));

const Movies: React.FC = () => {
  return (
    <div className={styles.container}>
      <MetaData title={'Home'} description={'This is home page'} />
      <section className={styles.main}>
        <h1>Welcome at Home Page! You are now authenticated.</h1>
      </section>
    </div>
  );
};

export default Movies;

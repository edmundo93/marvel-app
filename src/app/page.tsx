import React from 'react';
import HomeView from '@/presentation/components/home-view/home-view';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.content}>
      <HomeView />
    </div>
  );
}

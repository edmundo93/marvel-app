import React from 'react';

import styles from './progress-bar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress}></div>
    </div>
  );
};

export default ProgressBar;

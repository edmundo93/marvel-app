import React from 'react';

import styles from './matrix.module.css';

interface IProps {
  children: React.ReactNode;
}

const Matrix = (props: IProps) => {
  return <div className={styles.matrix}>{props.children}</div>;
};

export default Matrix;

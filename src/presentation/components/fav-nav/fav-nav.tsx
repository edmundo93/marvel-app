import React from 'react';

import styles from './fav-nav.module.css';
import Link from 'next/link';
import FavIcon from '../fav-icon/fav-icon';

interface IProps {
  numFavs: number
}

const FavNav = (props: IProps) => {
  return (
    <div className={styles.container}>
      <Link href={'/favorites'}><FavIcon selected={true} width={24} height={21.68} /></Link>
      {props.numFavs}
    </div>
  );
};

export default FavNav;

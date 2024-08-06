import React from 'react';

import styles from './fav-nav.module.css';
import Link from 'next/link';
import FavIcon from '@/presentation/components/fav-icon/fav-icon';

interface IProps {
  numFavs: number;
}

const FavNav = (props: IProps) => {
  return (
    <Link href={'/favorites'}>
      <div className={styles.container}>
        <FavIcon selected={true} width={24} height={21.68} />
        {props.numFavs}
      </div>
    </Link>
  );
};

export default FavNav;

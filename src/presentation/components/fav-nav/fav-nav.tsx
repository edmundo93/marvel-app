import React from 'react';
import Image from 'next/image';

import styles from './fav-nav.module.css';

import FavIcon from '/public/filled-fav-icon.svg';

const FavNav = () => {
  return (
    <div className={styles.container}>
      <Image src={FavIcon} alt="favs button" />
    </div>
  );
};

export default FavNav;

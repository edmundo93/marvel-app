import React from 'react';
import MarveloLogo from '/public/marvel-logo.svg';
import Image from 'next/image';

import styles from './nav-bar.module.css';
import FavNav from '../fav-nav/fav-nav';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src={MarveloLogo} alt="marvel logo" />
      <FavNav />
    </nav>
  );
};

export default Navbar;

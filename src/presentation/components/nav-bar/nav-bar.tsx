'use client'

import React from 'react';
import Image from 'next/image';

import styles from './nav-bar.module.css';
import FavNav from '../fav-nav/fav-nav';
import { useFavCharacters } from '@/presentation/contexts/fav-characters-context/fav-characters.context';
import Link from 'next/link';

const Navbar = () => {
  const { favCharacters } = useFavCharacters()

  return (
    <nav className={styles.navbar}>
      <Link href={'/'}>
        <Image src={'/marvel-logo.svg'} width={130} height={52} alt="marvel logo" priority />
      </Link>
      <FavNav numFavs={favCharacters?.length ?? 0}/>
    </nav>
  );
};

export default Navbar;

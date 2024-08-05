import React, { SetStateAction } from 'react';
import Image from 'next/image';

import SearchIcon from '/public/search.svg';

import styles from './search-input.module.css';

interface IProps {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

const SearchInput = (props: IProps) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <Image src={SearchIcon} alt="search" />
      <input
        type="text"
        value={props.value}
        onChange={onChangeHandler}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SearchInput;

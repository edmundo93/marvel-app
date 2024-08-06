import React from 'react';
import SearchInput from '@/presentation/components/ui/search-input/search-input';

import styles from './search-section.module.css';
import ProgressBar from '@/presentation/components/ui/progress-bar/progress-bar';

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  result: number;
  searching: boolean;
}

const SearchSection = (props: IProps) => {
  return (
    <div className={styles.searchWrapper}>
      {props.searching && <ProgressBar />}
      <SearchInput
        value={props.value}
        setValue={props.setValue}
        placeholder="SEARCH A CHARACTER..."
      />
      <div className={styles.results}>{`${props.result} RESULTS`}</div>
    </div>
  );
};

export default SearchSection;

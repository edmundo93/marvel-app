import React from "react";
import SearchInput from "../ui/search-input/search-input";

import styles from './search-section.module.css'

interface IProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    result: number
}

const SearchSection = (props: IProps) => {
    return <div className={styles.searchWrapper}>
        <SearchInput value={props.value} setValue={props.setValue} placeholder="SEARCH A CHARACTER..." />
        <div className={styles.results}>{`${props.result} RESULTS`}</div>
    </div>
}

export default SearchSection
'use client'

import React, { useEffect, useState } from "react";
import { useFecthCharacters } from "@/presentation/hooks/useFetchCharacters";
import ProgressBar from "@/presentation/components/ui/progress-bar/progress-bar";
import SearchSection from "../search-section/search-section";
import { useFetchCharacterByName } from "@/presentation/hooks/useFetcCharacterByName";
import { Character } from "@/features/characters/domain/entities/Character";
import CharactersList from "../characters-list/characters-list";

const MainView = () => {
    const { data, loading } = useFecthCharacters()
    const { filteredCharacters, setName, searching } = useFetchCharacterByName()
    const [searchValue, setSearchValue] = useState<string>('')
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        if (searching && filteredCharacters) {
            setCharacters(filteredCharacters)
        } else if (!searching && data) {
            setCharacters(data)
        }
    }, [data, filteredCharacters, searching])

    useEffect(() => {
        setName(searchValue)
    }, [searchValue])

    if (loading) {
        return <ProgressBar />
    }
    
    return <>
        { (searching && !filteredCharacters) && <ProgressBar /> }
        <SearchSection value={searchValue} setValue={setSearchValue} result={characters?.length ?? 0} />
        <CharactersList characters={characters} />
    </>
}

export default MainView
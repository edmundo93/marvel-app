'use client'

import React, { useEffect, useState } from "react";
import { Character } from "@/features/characters/domain/entities/Character";
import { CharactersService } from "@/features/characters/application/services/CharacterService";
import { CharactersServiceImpl } from "@/features/characters/infrastructure/services/CharactersServiceImpl";


export const useFetchCharacterByName = () => {
    const [filteredCharacters, setFilteredCharacters] = useState<Character[] | null>(null)
    const [name, setName] = useState<string>('')
    const [searching, setSearching] = useState<boolean>(false)

    useEffect(() => { 
        if (!name) {
            setFilteredCharacters(null)
            setSearching(false)
        } else {
            setSearching(true)
            void fetchByName()
        }
    }, [name])
    
    const fetchByName = async () => {
        const characters = await CharactersService(CharactersServiceImpl).getCharacterByName(name)
        setFilteredCharacters(characters)
    }

    return {
        filteredCharacters,
        setName,
        searching
    }
}
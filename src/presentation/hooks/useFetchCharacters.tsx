'use client'

import { useEffect, useState } from "react";
import { Character } from "@/features/characters/domain/entities/Character";
import { CharactersService } from "@/features/characters/application/services/CharacterService";
import { CharactersServiceImpl } from '@/features/characters/infrastructure/services/CharactersServiceImpl';

export const useFecthCharacters = () => {
    const [data, setData] = useState<Character[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => { 
        void fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        const characters = await CharactersService(CharactersServiceImpl).getAllCharacters()
        setData(characters)
        setLoading(false)
    }
    
    return { data, loading }
}
'use client'

import { useEffect, useState } from "react";
import { Character } from "@/features/characters/domain/entities/Character";
import { CharactersService } from "@/features/characters/application/services/CharacterService";
import { CharactersServiceImpl } from '@/features/characters/infrastructure/services/CharactersServiceImpl';

export const useFecthCharacters = () => {
    const [data, setData] = useState<Character[] | null>(null)

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        void fetchData(signal)

        return () => {
            if (abortController) {
                abortController.abort()
            }
        }
    }, [])

    const fetchData = async (signal: AbortSignal) => {
        const resp = await CharactersService(CharactersServiceImpl).getAllCharacters(signal)
        setData(resp)
    }
    
    return { data }
}
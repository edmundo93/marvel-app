'use client'

import { useEffect, useState } from "react"
import { ComicI } from "@/features/characters/domain/entities/Comic"
import { CharactersService } from "@/features/characters/application/services/CharacterService"
import { CharactersServiceImpl } from "@/features/characters/infrastructure/services/CharactersServiceImpl"


export const useFtechComics = (characterId: number) => {
    const [comics, setComics] = useState<ComicI[] | null>(null)

    useEffect(() => {
        let abortController: AbortController
        if (characterId !== null && characterId !== undefined) {
            abortController = new AbortController()
            const signal = abortController.signal
            void fetchComics(signal)
        }

        return () => {
            if (abortController) {
                abortController.abort()
            }
        }
    }, [characterId])

    const fetchComics = async (signal: AbortSignal) => {
        const characComics = await CharactersService(CharactersServiceImpl).getCharacterComics(characterId, signal)
        setComics(characComics)
    }

    return {
        comics
    }
}
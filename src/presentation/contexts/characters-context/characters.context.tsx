'use client'

import React, { createContext, useContext, useMemo, useReducer } from "react";
import { CharactersReducer, CharactersState } from "./characters.state";
import { CharactersContextI } from "./types";

interface IProps {
    children: React.ReactNode
}

export const CharactersContext = createContext<CharactersContextI>({
    dispatch: () => {},
    favCharacters: [],
    selectedCharacter: null
})

export const CharactersContextProvider = (props: IProps) => {
    const [state, dispatch] = useReducer(CharactersReducer, CharactersState)

    const value = useMemo(() => ({
        ...state,
        dispatch
    }), [state, dispatch])

    return <CharactersContext.Provider value={value}>
        { props.children }
    </CharactersContext.Provider>
}

export const useCharacters = () => useContext(CharactersContext)
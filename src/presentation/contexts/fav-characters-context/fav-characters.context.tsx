'use client'

import React, { createContext, useContext, useMemo, useReducer } from "react";
import { FavCharactersReducer, FavCharactersState } from "./fav-characters.state";
import { FavCharactersContextI } from "./types";

interface IProps {
    children: React.ReactNode
}

export const FavCharactersContext = createContext<FavCharactersContextI>({
    dispatch: () => {},
    favCharacters: []
})

export const FavCharactersContextProvider = (props: IProps) => {
    const [state, dispatch] = useReducer(FavCharactersReducer, FavCharactersState)

    const value = useMemo(() => ({
        ...state,
        dispatch
    }), [state, dispatch])

    return <FavCharactersContext.Provider value={value}>
        { props.children }
    </FavCharactersContext.Provider>
}

export const useFavCharacters = () => useContext(FavCharactersContext)
import { ActionI } from "./types";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "./constants";
import { Character } from "@/features/characters/domain/entities/Character";

interface FavCharactersStateI { favCharacters: Character[] }

export const FavCharactersState: FavCharactersStateI = {
    favCharacters: []
}

export const FavCharactersReducer = (state: FavCharactersStateI, action: ActionI) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                favCharacters: [...state.favCharacters, action.payload]
            }
        case REMOVE_CHARACTER:
            return {
                ...state,
                favCharacters: state.favCharacters.filter(character => character.id !== action.payload.id)
            }
        default:
            return state
    }
}
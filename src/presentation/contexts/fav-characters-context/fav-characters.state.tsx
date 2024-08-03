import { Character } from "@/domain/entities/Character";
import { ActionI } from "./types";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "./constants";

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
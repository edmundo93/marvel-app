import { ActionI, CharactersStateI } from './types';
import {
  ADD_FAV_CHARACTER,
  ADD_SELECTED_CHARACTER,
  REMOVE_FAV_CHARACTER,
  REMOVE_SELECTED_CHARACTER,
} from './constants';

export const CharactersState: CharactersStateI = {
  favCharacters: [],
  selectedCharacter: null,
};

export const CharactersReducer = (state: CharactersStateI, action: ActionI) => {
  switch (action.type) {
    case ADD_FAV_CHARACTER:
      return {
        ...state,
        favCharacters: [...state.favCharacters, action.payload],
      };
    case REMOVE_FAV_CHARACTER:
      return {
        ...state,
        favCharacters: state.favCharacters.filter(
          (character) => character.id !== action.payload.id,
        ),
      };
    case ADD_SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload,
      };
    case REMOVE_SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: null,
      };
    default:
      return state;
  }
};

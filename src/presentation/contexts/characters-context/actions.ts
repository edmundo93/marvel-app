import { Character } from '@/features/characters/domain/entities/Character';
import { Dispatch } from 'react';
import {
  ADD_FAV_CHARACTER,
  ADD_SELECTED_CHARACTER,
  REMOVE_FAV_CHARACTER,
  REMOVE_SELECTED_CHARACTER,
} from './constants';
import { ActionI } from './types';

export const addFavCharacter = (
  dispatch: Dispatch<ActionI>,
  character: Character,
) => {
  dispatch({
    type: ADD_FAV_CHARACTER,
    payload: character,
  });
};

export const removeFavCharacter = (
  dispatch: Dispatch<ActionI>,
  character: Character,
) => {
  dispatch({
    type: REMOVE_FAV_CHARACTER,
    payload: character,
  });
};

export const addSelectedCharacter = (
  dispatch: Dispatch<ActionI>,
  character: Character,
) => {
  dispatch({
    type: ADD_SELECTED_CHARACTER,
    payload: character,
  });
};

export const removeSelectedCharacter = (dispatch: Dispatch<ActionI>) => {
  dispatch({
    type: REMOVE_SELECTED_CHARACTER,
    payload: null,
  });
};

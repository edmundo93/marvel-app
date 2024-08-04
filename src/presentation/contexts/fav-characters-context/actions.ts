import { Character } from '@/features/characters/domain/entities/Character';
import { Dispatch } from 'react';
import { ADD_CHARACTER, REMOVE_CHARACTER } from './constants';
import { ActionI } from './types';

export const addFavCharacter = (
  dispatch: Dispatch<ActionI>,
  character: Character,
) => {
  dispatch({
    type: ADD_CHARACTER,
    payload: character,
  });
};

export const removeFavCharacter = (
  dispatch: Dispatch<ActionI>,
  character: Character,
) => {
  dispatch({
    type: REMOVE_CHARACTER,
    payload: character,
  });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from '@/features/characters/domain/entities/Character';
import { Dispatch } from 'react';

export interface FavCharactersStateI {
  favCharacters: Character[];
}

export interface FavCharactersContextI extends FavCharactersStateI {
  dispatch: Dispatch<any>;
}

export interface ActionI {
  type: 'ADD_CHARACTER' | 'REMOVE_CHARACTER';
  payload: any;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from '@/domain/entities/Character';
import { Dispatch } from 'react';

export interface FavCharactersStateI {
  favCharacters: Character[];
}

export interface FavCharactersContextI extends FavCharactersStateI {
  dispatch: Dispatch<any>;
}

export interface ActionI {
  type: string;
  payload: any;
}

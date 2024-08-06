/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from '@/features/characters/domain/entities/Character';
import { Dispatch } from 'react';

export interface CharactersStateI {
  favCharacters: Character[];
  selectedCharacter: Character | null;
}

export interface CharactersContextI extends CharactersStateI {
  dispatch: Dispatch<any>;
}

export interface ActionI {
  type:
    | 'ADD_SELECTED_CHARACTER'
    | 'REMOVE_SELECTED_CHARACTER'
    | 'ADD_FAV_CHARACTER'
    | 'REMOVE_FAV_CHARACTER';
  payload: any;
}

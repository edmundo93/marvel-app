/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from '@/features/characters/domain/entities/Character';
import {
  baseUrl,
  buildUrl,
} from '@/features/characters/infrastructure/configs/urls';
import { apiFetch } from '@/features/characters/infrastructure/adapters/apiAdapter';
import { CharacterServiceI } from './CharacterService';
import { ComicI } from '@/features/characters/domain/entities/Comic';
import {
  getStoredCharacters,
  storeCharacters,
} from './storage/characters-storage';

export const CharactersServiceImpl: CharacterServiceI = {
  getAllCharacters: async (
    signal: AbortSignal,
  ): Promise<Character[] | null> => {
    try {
      const storedCharacters = getStoredCharacters();
      if (storedCharacters && storedCharacters.length > 0) {
        return Promise.resolve(storedCharacters);
      } else {
        const url = `${buildUrl(`${baseUrl}characters`)}&limit=50`;
        const resp = await apiFetch(url, signal);
        const characters = resp?.data?.results ?? [];
        storeCharacters(characters);
        return characters;
      }
    } catch (error: any) {
      // If request was aborted return null else return empty array
      // we don´t handle error
      if (error.name === 'AbortError') {
        return null;
      }
      return [];
    }
  },

  getCharacterByName: async (
    name: string,
    signal: AbortSignal,
  ): Promise<Character[] | null> => {
    try {
      const url = `${buildUrl(`${baseUrl}characters`)}&nameStartsWith=${name}`;
      const resp = await apiFetch(url, signal);
      return resp?.data?.results ?? [];
    } catch (error: any) {
      // If request was aborted return null else return empty array
      // we don´t handle error
      if (error.name === 'AbortError') {
        return null;
      }
      return [];
    }
  },

  getCharacterComics: async (
    characterId: number,
    signal: AbortSignal,
  ): Promise<ComicI[] | null> => {
    try {
      const url = `${buildUrl(`${baseUrl}characters/${characterId}/comics`)}&limit=20`;
      const resp = await apiFetch(url, signal);
      return resp?.data?.results ?? [];
    } catch (error: any) {
      // If request was aborted return null else return empty array
      // we don´t handle error
      if (error.name === 'AbortError') {
        return null;
      }
      return [];
    }
  },
};

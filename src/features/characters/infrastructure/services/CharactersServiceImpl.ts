/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from '@/features/characters/domain/entities/Character';
import { baseUrl } from '@/features/characters/infrastructure/configs/urls';
import { apiFetch } from '../adapters/apiAdapter';
import { CharacterServiceI } from './CharacterService';

import mockjson from '@/test/mocks/characters-mock.json';

export const CharactersServiceImpl: CharacterServiceI = {
  getAllCharacters: async (): Promise<Character[]> => {
    try {
      // const url = `${baseUrl}&limit=50`;
      // const resp = await apiFetch(url);
      // return resp?.data?.results ?? [];
      const resp = await Promise.resolve(mockjson);
      return resp?.data?.results;
    } catch (error: any) {
      // As we don´t need to handle error we return an empty array
      return [];
    }
  },

  getCharacterByName: async (
    name: string,
    signal: AbortSignal,
  ): Promise<Character[]> => {
    try {
      const url = `${baseUrl}&nameStartsWith=${name}`;
      const resp = await apiFetch(url, signal);
      return resp?.data?.results ?? [];
    } catch (error: any) {
      // As we don´t need to handle error we return an empty array
      return [];
    }
  },
};

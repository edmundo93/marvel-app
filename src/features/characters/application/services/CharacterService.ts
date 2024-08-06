import { CharacterRepository } from '@/features/characters/domain/repositories/CharacterRepository';
import { CharacterServiceI } from '@/features/characters/infrastructure/services/CharacterService';

export const CharactersService = (
  apiService: CharacterServiceI,
): CharacterRepository => {
  return {
    getAllCharacters: async (signal: AbortSignal) => {
      return await apiService.getAllCharacters(signal);
    },
    getCharacterByName: async (name: string, signal: AbortSignal) => {
      return await apiService.getCharacterByName(name, signal);
    },
    getCharacterComics: async (characterId: number, signal: AbortSignal) => {
      return await apiService.getCharacterComics(characterId, signal);
    },
  };
};

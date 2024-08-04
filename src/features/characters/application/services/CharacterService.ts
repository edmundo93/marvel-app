import { CharacterRepository } from '@/features/characters/domain/repositories/CharacterRepository';
import { CharacterServiceI } from '@/features/characters/infrastructure/services/CharacterService';

export const CharactersService = (
  apiService: CharacterServiceI,
): CharacterRepository => {
  return {
    getAllCharacters: async () => {
      return await apiService.getAllCharacters();
    },
    getCharacterByName: async (name: string, signal: AbortSignal) => {
      return await apiService.getCharacterByName(name, signal);
    },
  };
};

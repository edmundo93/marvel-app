import { Character } from '@/features/characters/domain/entities/Character';
import { ComicI } from '@/features/characters/domain/entities/Comic';

export interface CharacterRepository {
  getAllCharacters(signal: AbortSignal): Promise<Character[] | null>;
  getCharacterByName(
    name: string,
    signal: AbortSignal,
  ): Promise<Character[] | null>;
  getCharacterComics(
    characterId: number,
    signal: AbortSignal,
  ): Promise<ComicI[] | null>;
}

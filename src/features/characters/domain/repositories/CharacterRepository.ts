import { Character } from '../entities/Character';
import { ComicI } from '../entities/Comic';

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

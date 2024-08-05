import { Character } from '../../domain/entities/Character';
import { ComicI } from '../../domain/entities/Comic';

export interface CharacterServiceI {
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

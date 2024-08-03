import { Character } from '../entities/Character';

export interface CharacterRepository {
  getAllCharacters(): Promise<Character[]>;
  getCharacterByName(name: string): Promise<Character[]>;
}

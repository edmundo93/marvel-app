import { Character } from '../../domain/entities/Character';

export interface CharacterServiceI {
  getAllCharacters(): Promise<Character[]>;
  getCharacterByName(name: string): Promise<Character[]>;
}
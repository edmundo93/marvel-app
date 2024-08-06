import { Character } from '@/features/characters/domain/entities/Character';
import { getItem, setItem } from './session-storage';

export const storeCharacters = (value: Character[]) => {
  setItem('characters', value);
};

export const getStoredCharacters = (): Character[] | null => {
  return getItem('characters');
};

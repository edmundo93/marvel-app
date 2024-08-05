'use client';

import { useEffect, useState } from 'react';
import { Character } from '@/features/characters/domain/entities/Character';
import { CharactersService } from '@/features/characters/application/services/CharacterService';
import { CharactersServiceImpl } from '@/features/characters/infrastructure/services/CharactersServiceImpl';

export const useFetchCharacterByName = () => {
  const [filteredCharacters, setFilteredCharacters] = useState<
    Character[] | null
  >(null);
  const [name, setName] = useState<string>('');
  const [searching, setSearching] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!name) {
      setFilteredCharacters(null);
      setSearching(false);
    } else {
      setSearching(true);
      void fetchByName(signal);
    }

    return () => {
      abortController.abort();
    };
  }, [name]);

  const fetchByName = async (signal: AbortSignal) => {
    const characters = await CharactersService(
      CharactersServiceImpl,
    ).getCharacterByName(name, signal);
    setFilteredCharacters(characters);
  };

  return {
    filteredCharacters,
    setName,
    searching,
  };
};

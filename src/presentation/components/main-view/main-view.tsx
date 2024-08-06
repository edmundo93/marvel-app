'use client';

import React, { useEffect, useState } from 'react';
import SearchSection from '@/presentation/components/search-section/search-section';
import { useFetchCharacterByName } from '@/features/characters/infrastructure/hooks/useFetcCharacterByName';
import { Character } from '@/features/characters/domain/entities/Character';
import CharactersList from '@/presentation/components/characters-list/characters-list';
import Reloader from '@/presentation/components/reloader/reloader';
import { usePathname } from 'next/navigation';

interface IProps {
  characters: Character[];
}

const MainView = (props: IProps) => {
  const pathname = usePathname();
  const { filteredCharacters, setName, searching } = useFetchCharacterByName();
  const [searchValue, setSearchValue] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (searching && filteredCharacters) {
      setCharacters(filteredCharacters);
    } else {
      setCharacters(props.characters);
    }
  }, [props.characters, filteredCharacters, searching]);

  useEffect(() => {
    setName(searchValue);
  }, [searchValue]);

  return (
    <>
      <SearchSection
        value={searchValue}
        setValue={setSearchValue}
        result={characters?.length ?? 0}
        searching={searching && !filteredCharacters}
      />
      {pathname === '/' && !props.characters.length && !searching && (
        <Reloader />
      )}
      {characters.length > 0 && <CharactersList characters={characters} />}
    </>
  );
};

export default MainView;

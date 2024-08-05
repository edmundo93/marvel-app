import React, { useMemo } from 'react';
import { Character } from '@/features/characters/domain/entities/Character';
import Matrix from '@/presentation/components/ui/matrix/matrix';
import CharacterCard from '../character-card/character-card';

interface IProps {
  characters: Character[];
}

const CharactersList = (props: IProps) => {
  const CardList = useMemo(() => {
    return props.characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ));
  }, [props.characters]);

  return <Matrix>{CardList}</Matrix>;
};

export default CharactersList;

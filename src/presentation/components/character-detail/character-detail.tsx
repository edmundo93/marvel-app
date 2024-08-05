'use client';

import { useCharacters } from '@/presentation/contexts/characters-context/characters.context';
import { Character } from '@/features/characters/domain/entities/Character';
import CharacterResume from './character-resume/character-resume';
import CharacterComics from './character-comics/character-comics';

const CharacterDetail = () => {
  const { selectedCharacter } = useCharacters();
  return (
    <>
      <CharacterResume character={selectedCharacter as Character} />
      <CharacterComics characterId={selectedCharacter?.id as number} />
    </>
  );
};

export default CharacterDetail;

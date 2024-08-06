import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharactersList from '@/presentation/components/characters-list/characters-list';
import { Character } from '@/features/characters/domain/entities/Character';
import { mockCharacters } from './mocks/characters';

// Mock the CharacterCard component
jest.mock('@/presentation/components/character-card/character-card', () => {
  const MockCharacterCard = (props: { character: Character }) => (
    <div data-testid="character-card">{props.character.name}</div>
  );
  MockCharacterCard.displayName = 'MockCharacterCard';

  return MockCharacterCard;
});

describe('CharactersList Component', () => {
  test('renders a list of CharacterCard components', () => {
    render(<CharactersList characters={mockCharacters} />);

    expect(screen.getAllByTestId('character-card')).toHaveLength(
      mockCharacters.length,
    );
    expect(screen.getByText(mockCharacters[0].name)).toBeInTheDocument();
  });

  test('renders no CharacterCard components when characters list is empty', () => {
    render(<CharactersList characters={[]} />);

    expect(screen.queryByTestId('character-card')).not.toBeInTheDocument();
  });
});

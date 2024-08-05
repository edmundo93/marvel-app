import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterCard from '@/presentation/components/character-card/character-card';
import { useCharacters } from '@/presentation/contexts/characters-context/characters.context';
import { addSelectedCharacter } from '@/presentation/contexts/characters-context/actions';
import { Character } from '@/features/characters/domain/entities/Character';
import mockedCharacters from './mocks/characters-mock'

// Mocking the custom hooks and actions
jest.mock('@/presentation/contexts/characters-context/characters.context');
jest.mock('@/presentation/contexts/characters-context/actions');

describe('CharacterCard Component', () => {
  const mockDispatch = jest.fn();
  const mockCharacter: Character = mockedCharacters.data.results[0]

  beforeEach(() => {
    (useCharacters as jest.Mock).mockReturnValue({
      dispatch: mockDispatch,
      favCharacters: [],
    });
  });

  test('renders character name and photo', () => {
    render(<CharacterCard character={mockCharacter} />);
      
    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByAltText('photo')).toBeInTheDocument();
  });

  test('calls addSelectedCharacter on link click', () => {
    render(<CharacterCard character={mockCharacter} />);
      
    fireEvent.click(screen.getByRole('link'));
    expect(addSelectedCharacter).toHaveBeenCalledWith(mockDispatch, mockCharacter);
  });
});

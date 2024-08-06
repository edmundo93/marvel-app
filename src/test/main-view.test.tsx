import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainView from '@/presentation/components/main-view/main-view';
import { useFetchCharacterByName } from '@/features/characters/infrastructure/hooks/useFetcCharacterByName';
import { usePathname } from 'next/navigation';
import mockedCharacters from './mocks/characters-mock';
import { Character } from '@/features/characters/domain/entities/Character';

// Mocking the custom hooks
jest.mock(
  '@/features/characters/infrastructure/hooks/useFetcCharacterByName',
  () => ({
    useFetchCharacterByName: jest.fn(),
  }),
);
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('MainView Component', () => {
  let mockCharacters: Character[];
  beforeEach(() => {
    mockCharacters = mockedCharacters.data.results as Character[];
    (useFetchCharacterByName as jest.Mock).mockReturnValue({
      filteredCharacters: [],
      setName: jest.fn(),
      searching: false,
    });
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  test('renders SearchSection component', () => {
    render(<MainView characters={mockCharacters} />);
    expect(
      screen.getByPlaceholderText('SEARCH A CHARACTER...'),
    ).toBeInTheDocument();
  });

  test('renders CharactersList component when characters are present', () => {
    render(<MainView characters={mockCharacters} />);
    expect(screen.getByText(mockCharacters[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockCharacters[1].name)).toBeInTheDocument();
  });

  test('renders Reloader component when pathname is "/" and no characters are present', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    render(<MainView characters={[]} />);
    expect(screen.getByText('NOT CHARACTERS AVAILABLE')).toBeInTheDocument();
  });

  test('updates search value and calls setName', () => {
    const setNameMock = jest.fn();
    (useFetchCharacterByName as jest.Mock).mockReturnValue({
      filteredCharacters: [],
      setName: setNameMock,
      searching: false,
    });

    render(<MainView characters={mockCharacters} />);
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'SEARCH A CHARACTER...',
    );
    fireEvent.change(searchInput, { target: { value: 'New Character' } });

    expect(searchInput.value).toBe('New Character');
    expect(setNameMock).toHaveBeenCalledWith('New Character');
  });
});

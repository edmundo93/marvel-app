import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MainView from '@/presentation/components/main-view/main-view';
import { useFecthCharacters } from '@/presentation/hooks/useFetchCharacters';
import { useFetchCharacterByName } from '@/presentation/hooks/useFetcCharacterByName';
import { mockCharacter } from './mocks/characters';

// Mock the hooks
jest.mock('@/presentation/hooks/useFetchCharacters', () => ({
    useFecthCharacters: jest.fn(),
}));
jest.mock('@/presentation/hooks/useFetcCharacterByName', () => ({
    useFetchCharacterByName: jest.fn(),
}));

describe('MainView Component', () => {
    beforeEach(() => {
        (useFecthCharacters as jest.Mock).mockReturnValue({
            data: null,
            loading: false,
        });

        (useFetchCharacterByName as jest.Mock).mockReturnValue({
            filteredCharacters: null,
            setName: jest.fn(),
            searching: false,
        });
    });

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('renders SearchSection and CharactersList when data is available', () => {
        const mockData = [mockCharacter];
        (useFecthCharacters as jest.Mock).mockReturnValue({
            data: mockData,
            loading: false,
        });

        render(<MainView />);
        
        expect(screen.getByPlaceholderText('SEARCH A CHARACTER...')).toBeInTheDocument();
        expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    });

    test('updates search value and filters characters', () => {
        const mockSetName = jest.fn();
        (useFetchCharacterByName as jest.Mock).mockReturnValue({
            filteredCharacters: [mockCharacter],
            setName: mockSetName,
            searching: true,
        });

        render(<MainView />);

        const searchInput = screen.getByPlaceholderText('SEARCH A CHARACTER...');
        fireEvent.change(searchInput, { target: { value: '3-D Man' } });

        expect(mockSetName).toHaveBeenCalledWith('3-D Man');
        expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    });
});

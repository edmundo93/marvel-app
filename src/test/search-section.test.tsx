import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchSection from '@/presentation/components/search-section/search-section'

describe('SearchSection Component', () => {
    const mockSetValue = jest.fn();

    const defaultProps = {
        value: '',
        setValue: mockSetValue,
        result: 0,
    };

    test('renders SearchInput and results count', () => {
        render(<SearchSection searching={false} {...defaultProps} />);
        
        expect(screen.getByPlaceholderText('SEARCH A CHARACTER...')).toBeInTheDocument();
        expect(screen.getByText('0 RESULTS')).toBeInTheDocument();
    });

    test('calls setValue on input change', () => {
        render(<SearchSection searching={true} {...defaultProps} />);
        
        const input = screen.getByPlaceholderText('SEARCH A CHARACTER...');
        
        fireEvent.change(input, { target: { value: 'New Character' } });

        expect(mockSetValue).toHaveBeenCalledWith('New Character');
    });

    test('displays correct results count', () => {
        const customProps = { ...defaultProps, result: 5 };
        
        render(<SearchSection searching={true} {...customProps} />);

        expect(screen.getByText('5 RESULTS')).toBeInTheDocument();
    });
});

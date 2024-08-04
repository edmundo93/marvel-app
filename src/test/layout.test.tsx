import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';
import '@testing-library/jest-dom';
import { ReactNode } from 'react';

jest.mock('@/presentation/components/nav-bar/nav-bar', () => {
  const MockNavBar = () => <div>Mocked Navbar</div>
  MockNavBar.displayName = 'MockNavBar'
  
  return MockNavBar
});
jest.mock('@/presentation/components/ui/progress-bar/progress-bar', () => {
  const MockProgressBar = () => <div>Mocked ProgressBar</div>
  MockProgressBar.displayName = 'MockProgressBar'
  
  return MockProgressBar
});

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const children: ReactNode = <div>Test Children</div>;
    render(<RootLayout>{children}</RootLayout>);

    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('renders Navbar component', () => {
    render(<RootLayout><div /></RootLayout>);

    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument();
  });
});
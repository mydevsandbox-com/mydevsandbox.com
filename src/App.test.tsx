import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main heading and footer text', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /simple place for code experiments/i })).toBeInTheDocument();
    expect(screen.getByText(/built with react, typescript, and github pages/i)).toBeInTheDocument();
  });

  it('renders the shell snippet content', () => {
    render(<App />);

    expect(screen.getByText(/#!\/bin\/bash/i)).toBeInTheDocument();
    expect(screen.getByText(/this is \$\{state\}\./i)).toBeInTheDocument();
  });
});

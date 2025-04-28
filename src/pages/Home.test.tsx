import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { describe, it, expect } from 'vitest';

describe('Home', () => {
  it('should render title', () => {
    render(<Home />);
    const title = screen.getByRole('heading', { name: /home/i });
    expect(title).toBeInTheDocument();
  });

  it('should render paragraph', () => {
    render(<Home />);
    const paragraph = screen.getByTestId('paragraph');
    expect(paragraph).toBeInTheDocument();
  });

  it('should render list', () => {
    render(<Home />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('should render list items', () => {
    render(<Home />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('should render list item with text Home', () => {
    render(<Home />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveTextContent('Home');
  });

  it('should render list item with text About', () => {
    render(<Home />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[1]).toHaveTextContent('About');
  });

  it('should render list item with text Contact', () => {
    render(<Home />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[2]).toHaveTextContent('Contact');
  });

  it('should render button', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('should render toggle button', () => {
    render(<Home />);
    const toggleButton = screen.getByRole('button', { name: /show/i });
    expect(toggleButton).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render button with default variant', () => {
    render(<Button />);
    const button = screen.getByRole('button', { name: /I'm a button/i });
    expect(button).toBeInTheDocument();
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should render default button', () => {
    // given
    render(<Button className="bg-red-500">Default button</Button>);
    // when
    const button = screen.getByRole('button', { name: /Default button/i });
    // then
    expect(button).matchSnapshot();
  });

  it('should render button with custom className', () => {
    // given
    render(<Button className="bg-red-500">Custom button</Button>);
    // when
    const button = screen.getByRole('button', { name: /Custom button/i });
    // then
    expect(button).toHaveClass('bg-red-500');
  });

  it('should render button', () => {
    // given
    render(<Button>I'm a button</Button>);
    // when
    const button = screen.getByRole('button', { name: /I'm a button/i });
    // then
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    // given
    const onClick = vi.fn();
    render(<Button onClick={onClick}>I'm a button</Button>);
    // when
    const button = screen.getByRole('button', { name: /I'm a button/i });
    // then
    expect(button).toBeInTheDocument();
    // when
    await userEvent.click(button);
    // then
    expect(onClick).toHaveBeenCalled();
  });
});

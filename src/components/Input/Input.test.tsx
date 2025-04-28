import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
  it('should render', async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    const input = screen.getByRole('textbox');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await userEvent.type(input, 'teste');

    expect(onChange).toHaveBeenCalledWith('test');
  });
});

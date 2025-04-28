import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  it('should render button with "Show" text initially', () => {
    // given
    render(
      <ToggleButton>
        <div>Test</div>
      </ToggleButton>
    );
    // when
    const button = screen.getByText('Show');
    const content = screen.queryByText('Test');
    // then
    expect(button).toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });

  it('should render content when button is clicked', () => {
    // given
    render(
      <ToggleButton>
        <div data-testid="content">Test</div>
      </ToggleButton>
    );
    // when
    fireEvent.click(screen.getByText('Show'));
    // then
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});

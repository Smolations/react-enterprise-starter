import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Button', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <Button onClick={handleClick}>
        Click Me
      </Button>
    );
  });


  // basic first test (i.e. "what's the first thing the user sees?")
  test('should render', () => {
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  // always test callbacks
  test('should execute callback when clicked', () => {
    // for demonstration purposes, you can also select by aria role
    const button = screen.queryByRole('button');

    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

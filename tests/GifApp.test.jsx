import { fireEvent, render, screen } from '@testing-library/react';

import { GifsApp } from '../src/GifsApp';

describe('GifApp component', () => {
  const setup = () => {
    render(<GifsApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    return { input, form };
  };

  test('should contain the app title on h1 tag', () => {
    setup();

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe('Gifs App');
  });

  test('should add a new category', () => {
    const { input, form } = setup();

    fireEvent.input(input, { target: { value: 'Naruto' } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: 'Full Metal Alchemist' } });
    fireEvent.submit(form);

    expect(screen.getByText('Naruto')).toBeTruthy();
    expect(screen.getByText('Full Metal Alchemist')).toBeTruthy();
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });

  test('should not add a category twice', () => {
    const { input, form } = setup();

    fireEvent.input(input, { target: { value: 'DBZ' } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: 'DBZ' } });
    fireEvent.submit(form);

    expect(screen.getByText('DBZ')).toBeTruthy();
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });
});

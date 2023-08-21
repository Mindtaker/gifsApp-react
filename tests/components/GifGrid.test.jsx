import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid component', () => {
  const category = 'DBZ';

  test('should show the loading when loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('should show the items when load the gifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Test title',
        url: 'https://localhost/test.jpg',
      },
      {
        id: 'DEF',
        title: 'Test title 2',
        url: 'https://localhost/test2.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('GifItem component', () => {
  const url = 'https://www.test.com/test.jpg';
  const title = 'test';

  test('should match the snapshot', () => {
    const { container } = render(<GifItem url={url} title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('should show the image with the given url', () => {
    render(<GifItem url={url} title={title} />);
    
    const imgElement = screen.getByRole('img');
    expect(imgElement.src).toBe(url);
    expect(imgElement.alt).toBe(title);
  });
  
  test('should show the title of the gif', () => {
    render(<GifItem url={url} title={title} />);
    
    expect(screen.getByText(title)).toBeTruthy();
  });
});

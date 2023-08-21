import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components';

describe('AddCategory component', () => {
  test('should change the text of the input', () => {
    const category = jest.fn();
    render(<AddCategory onNewCategory={category} />);
  
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Hello' } });

    expect(input.value).toBe('Hello');
  });

  test('should call onNewCategory if the input has a value', () => {
    const inputValue = 'Death Note';
    
    const category = jest.fn();
    render(<AddCategory onNewCategory={category} />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(category).toHaveBeenCalledTimes(1);
    expect(category).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if the input is empty', () => {
    const category = jest.fn();
    render(<AddCategory onNewCategory={category} />);
    
    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(category).not.toHaveBeenCalled();
  });
});

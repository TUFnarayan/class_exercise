import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../components/InputField';

describe('InputField Component', () => {
  test('renders with placeholder', () => {
    render(<InputField value="" onChange={() => {}} placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<InputField value="" onChange={handleChange} placeholder="Type here" />);
    const input = screen.getByTestId('input-field');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
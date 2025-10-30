import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../components/InputField';

describe('InputField Component', () => {
  test('renders with placeholder and label', () => {
    render(<InputField value="" onChange={() => {}} placeholder="Enter text" label="Username" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  test('renders with correct type', () => {
    render(<InputField value="" onChange={() => {}} placeholder="Email" type="email" />);
    const input = screen.getByTestId('input-field');
    expect(input).toHaveAttribute('type', 'email');
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<InputField value="" onChange={handleChange} placeholder="Type here" />);
    const input = screen.getByTestId('input-field');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays error message when provided', () => {
    render(<InputField value="" onChange={() => {}} placeholder="Enter text" error="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });
});

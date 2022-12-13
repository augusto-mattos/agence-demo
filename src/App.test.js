import { render, screen } from '@testing-library/react';
import App from './App';

test('renders agence header', () => {
  render(<App />);
  const el = screen.getByText(/Agence/i);
  expect(el).toBeInTheDocument();
});

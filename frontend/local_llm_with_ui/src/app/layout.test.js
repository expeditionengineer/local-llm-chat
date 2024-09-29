import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('renders homepage', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to Next.js/i);
  expect(linkElement).toBeInTheDocument();
});

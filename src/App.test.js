// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApiDocJs title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApiDocJs/i);
    expect(titleElement).toBeInTheDocument();
});

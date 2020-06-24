import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders hello world', () => {
    const { getByText } = render(<App />);
    const componentText = getByText('Hello World!');
    expect(componentText).toBeInTheDocument();
  });
});

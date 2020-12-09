import React from 'react';
import App from './App';
import { cleanup, render, waitFor } from '@testing-library/react';

import { mockData } from './utils/testUtils'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => {
        return Promise.resolve(mockData)
    },
  })
);

beforeEach(() => {
    fetch.mockClear();
  });

afterEach(() => {
    cleanup()
})


test('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('main-app')).toBeTruthy()
});

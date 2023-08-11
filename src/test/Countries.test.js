// Countries.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Countries from '../components/Countries';

describe('Countries Component', () => {
  const mockCountry = {
    officialName: 'Test Country',
    flag: 'test-flag-url',
    population: 1235458,
  };

  it('should render country name and flag', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Countries country={mockCountry} />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

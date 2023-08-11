import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Details from '../components/Details';

const mockStore = configureMockStore([thunk]);

const initialState = {
  country: {
    data: [
      {
        coatOfArms: 'test-coatOfArms-url',
        CommonName: 'Test Country',
        continent: 'Test Continent',
        capital: 'Test Capital',
        population: 'Test Population',
        area: 'Test Area',
        timezone: 'Test Timezone',
        landlocked: true,
        independent: true,
      },
    ],
  },
};

describe('Details Component', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

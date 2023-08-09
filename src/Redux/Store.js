import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './Countries/CountriesSlice';

const Store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default Store;

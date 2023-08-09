import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

const fetchData = (data) =>
  data.map((country) => ({
    countryId: uuidv4(),
    officialName: country.name.official,
    capital: country.capital,
    landlocked: country.landlocked,
    area: country.area,
    timeZone: country.timezones,
    independent: country.independent,
    population: country.population,
    language: country.languages,
    continents: country.continents[0],
    coatOfArms: country.coatOfArms.png,
    flag: country.flags.png,
  }));

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      return fetchData(data);
    } catch (error) {
      throw Error(error);
    }
  }
);

export const CountriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default CountriesSlice.reducer;

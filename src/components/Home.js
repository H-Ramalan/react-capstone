import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../Redux/Countries/CountriesSlice';
import Countries from './Countries';

const Home = () => {
  const useSelector = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="country-box">
        <div className="country">
          <div className="input">
            <input
              type="text"
              className="search-bar"
              value={search}
              placeholder="Search Country"
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className="countries-box">
          <Countries key={country.countryId} country={country} />
        </div>
      </div>
    </>
  );
};

export default Home;

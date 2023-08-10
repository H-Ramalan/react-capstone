import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../Redux/Countries/CountriesSlice';
import Countries from './Countries';
import './styles/Home.css';

const Home = () => {
  const countries = useSelector((state) => state.countries.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      <div className="country-box">
        <div className="countries-box">
          {countries.map((country) => (
            <Countries key={country.countryId} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

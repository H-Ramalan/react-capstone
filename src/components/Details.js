import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountry } from '../Redux/Countries/CountriesSlice';
import './styles/Details.css';

const Details = () => {
  const country = useSelector((state) => state.countries?.country);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry(params.country));
  }, [dispatch]);
  return (
    <div className="details-box">
      <div className="back-btn">
        <button className="back" type="button" onClick={() => navigate('/')}>
          <FiArrowLeft />
          Back
        </button>
      </div>

      <div className="arm-name">
        <img src={country?.coatOfArms} alt="coat" className="coat-of-arm" />
        <h1 className="name">{country?.commonName}</h1>
      </div>
      <div className="details">
        <ul>
          <li>
            Continent:
            {country?.continents}
          </li>
          <li>
            Capital:
            {country?.capital}
          </li>

          <li>
            Population:
            {country?.population}
          </li>
          <li>
            Land Area:
            {country?.area}
          </li>
          <li>
            Timezone:
            {country?.timeZone}
          </li>
          <li>
            Landlocked:
            {`${country?.landlocked}`}
          </li>
          <li>
            Independent:
            {`${country?.independent}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;

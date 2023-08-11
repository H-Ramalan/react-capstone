import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import './styles/Countries.css';

const Countries = ({ country }) => {
  const { officialName, flag, population } = country;
  return (
    <>
      <div className="countries">
        <NavLink className="link" to={`/details/${officialName}`}>
          <div className="flag">
            <img src={flag} alt="flag" className="flag-pic" />
            <BsArrowRightCircle className="arrow" />
          </div>
          <h2 className="country-name">{officialName}</h2>
          <p className="people">
            {population}
            {' '}
            People
          </p>
        </NavLink>
      </div>
    </>
  );
};

export default Countries;

Countries.propTypes = {
  country: PropTypes.shape({
    officialName: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles/Countries.css';

const Countries = ({ country }) => {
  const { officialName, flag } = country;
  return (
    <>
      <div className="countries">
        <NavLink className="link" to={`/details/${officialName}`}>
          <div className="flag">
            <img src={flag} alt="flag" />
          </div>
          <h2 className="country-name">{officialName}</h2>
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
  }).isRequired,
};

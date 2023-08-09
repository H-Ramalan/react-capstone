import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Countries = ({ country }) => {
  const { officialName, flag } = country;
  return (
    <>
      <div className="countries">
        <NavLink className="link">
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

Countries.PropTypes = {
  country: PropTypes.shape({
    officialName: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

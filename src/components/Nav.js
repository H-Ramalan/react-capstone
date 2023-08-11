import React from 'react';
import './styles/Nav.css';
import { FcGlobe } from 'react-icons/fc';
import { FiSettings } from 'react-icons/fi';

const Nav = () => (
  <nav className="nav">
    <div>
      <FcGlobe className="globe" />
    </div>
    <h1>Countries!</h1>
    <FiSettings className="settings" />
  </nav>
);

export default Nav;

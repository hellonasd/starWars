import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/people'>People</Link>
        </li>
        <li>
          <Link to='/planet'>Planets</Link>
        </li>
        <li>
          <Link to='/starship'>Starships</Link>
        </li>
      </ul>
      <button 
      className='btn btn-primary btn-sm'
      onClick={onServiceChange}
      >
        <p className='lead text-danger'>Change service</p>
      </button>
    </div>
  );
};

export default Header;
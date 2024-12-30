import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <h2>Population App</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/continent/Africa">Africa</Link>
        </li>
        <li>
          <Link to="/continent/Asia">Asia</Link>
        </li>
        <li>
          <Link to="/continent/Europe">Europe</Link>
        </li>
        <li>
          <Link to="/continent/Americas">Americas</Link>
        </li>
        <li>
          <Link to="/continent/Oceania">Oceania</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

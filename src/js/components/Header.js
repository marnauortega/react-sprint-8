import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Star Wars</h1>
        <Link to="/" className="header-link">
          Home
        </Link>
        <Link to="/starships" className="header-link">
          Starships
        </Link>
      </header>
    </>
  );
};

export default Header;

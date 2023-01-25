import { Link } from "react-router-dom";
import logo from "../../assets/images/starwars.svg";
import insta from "../../assets/images/insta.svg";
import account from "../../assets/images/account.svg";

const Header = ({ logged, setLogged }) => {
  return (
    <>
      <header>
        <div className="pre-nav">
          <a href="https://instagram.com/starwars" className="header-link nav-item">
            <img src={insta} className="soc-logo" alt="social logo" />
            <p>Follow the force</p>
          </a>
          <Link to="/" className="header-link">
            <h1>
              <img src={logo} className="main-logo" alt="star wars logo" />
            </h1>
          </Link>
          {logged ? (
            <Link to="/" className="header-link nav-item" onClick={() => setLogged(false)}>
              <p>Sign out</p>
              <img src={account} alt="account icon" />
            </Link>
          ) : (
            <Link to="/login" className="header-link nav-item">
              <p>Sign in</p>
              <img src={account} alt="account icon" />
            </Link>
          )}
        </div>
        <nav>
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/starships" className="header-link">
            Starships
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

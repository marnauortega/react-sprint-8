import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/starwars.svg";
import insta from "../../assets/images/insta.svg";
import account from "../../assets/images/account.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";

const Header = ({ logged, setLogged }) => {
  const location = useLocation();

  const logoRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl1 = gsap.timeline({});

      tl1.fromTo(
        logoRef.current,
        { yPercent: 300, scale: 2 },
        {
          yPercent: 0,
          scale: 1,
          duration: 1.5,
          delay: 0.75,
          ease: "power2.inOut",
        },
        "<"
      );
      tl1.fromTo(
        ".home *",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, duration: 1, y: 0, delay: 1, stagger: 0.05, ease: "power3.out" },
        "<"
      );
      tl1.fromTo(".fade", { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, ">-0.4");
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header>
        <div className="pre-nav">
          <a href="https://instagram.com/starwars" className="nav-link fade">
            <img src={insta} className="soc-logo" alt="social logo" />
            <p>Follow the force</p>
          </a>
          <Link to="/">
            <h1>
              <img src={logo} className="main-logo" alt="star wars logo" ref={logoRef} />
            </h1>
          </Link>
          {logged ? (
            <Link to="/" className="nav-link fade" onClick={() => setLogged(false)}>
              <p>Sign out</p>
              <img src={account} alt="account icon" />
            </Link>
          ) : (
            <Link to="/login" className="nav-link fade">
              <p>Sign in</p>
              <img src={account} alt="account icon" />
            </Link>
          )}
        </div>
      </header>
      <nav className="fade">
        {location.pathname.startsWith("/login") ? (
          <>
            <Link to="/" className="nav-link arrow">
              <img src={arrowLeft} alt="arrow icon" />
            </Link>
            <Link to="login/signin" className={location.pathname === "/login/signin" ? "active nav-link" : "nav-link"}>
              Login
            </Link>
            <Link
              to="/login/register"
              className={location.pathname === "/login/register" ? "active nav-link" : "nav-link"}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className={location.pathname === "/" ? "active nav-link" : "nav-link"}>
              Home
            </Link>
            <Link to="/starships" className={location.pathname === "/starships" ? "active nav-link" : "nav-link"}>
              Starships
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;

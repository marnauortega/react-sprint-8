import Page from "../components/Page";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const location = useLocation();

  return (
    <Page mainClass="home" title="Home">
      <h1>Welcome</h1>
      <p>
        A long time ago in a galaxy far, far away a rising IT Academy appeared out of thin air. A bunch of mentors and
        students gathered to learn the cutting edge of web technologies. They taught the ways of React, Angular and Vue,
        along with the strengths of Node, Java and PHP. They even ventured into the abyss of Data Science. May the force
        be with them!
      </p>
      <Link to="/starships" className={location.pathname === "/starships" ? "active nav-link" : "nav-link"}>
        <button>View starships</button>
      </Link>
    </Page>
  );
};

export default Home;

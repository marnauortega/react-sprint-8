import github from "../../assets/images/github.svg";

const Footer = () => {
  return (
    <>
      <footer className="fade">
        <a href="https://github.com/marnauortega" className="nav-link ">
          <img src={github} alt="github logo" />
          <p>Github</p>
        </a>
        <p className="nav-link ">Coded by Martí Arnau</p>
        <div className="nav-link ">
          <p>January</p> <p>2023</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

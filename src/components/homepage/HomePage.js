import "./HomePage.css";
import About from "../AboutMe/About";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import html from "../../images/HTML_Logo.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import python from "../../images/python.png";
import nodejs from "../../images/nodejs.png";

const HomePage = () => {
  const getNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  console.log(window.innerWidth);

  return (
    <div className="HomePage" id="homepage">
      <div className="HomePage-div">
        <div className="headers">
          <h1>Ruwaidah Alfakhri</h1>
          <h3>Full Stack Web Developer</h3>
        </div>{" "}
        <div className="logos-img">
          <div>
            <img src={html} />
            <img src={css} />
            <img src={js} />
          </div>
          <div>
            <img src={react} />
            <img src={python} />
            <img src={nodejs} />
          </div>
        </div>{" "}
      </div>
      <About />
      <Projects />
      <ContactMe />
      {/* <NavBar /> */}
    </div>
  );
};

export default HomePage;

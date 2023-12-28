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
  const nextPage = (page) => {
    console.log(window.innerHeight, window.screen.height);
    window.scrollBy({
      top: page,
      behavior: "smooth",
    });
  };

  return (
    <div className="HomePage" id="homepage">
      <div className="HomePage-div">
        <div className="name-logos">
          <div className="headers">
            <h1>Ruwaidah Alfakhri</h1>
            <h3>Full Stack Web Developer</h3>
          </div>{" "}
          <div className="logos-img">
            <img src={html} />
            <img src={css} />
            <img src={js} />
            <img src={react} />
            <img src={python} />
            <img src={nodejs} />
          </div>{" "}
        </div>
      </div>
      <About />
      <Projects />
      <ContactMe />

      <div className="btns-div">
        <button
          className="next-back-btn"
          onClick={() => nextPage(window.screen.height)}
        >
          Home
        </button>
        <button
          className="next-back-btn"
          onClick={() => nextPage(window.innerHeight * 2)}
        >
          about
        </button>
        <button className="next-back-btn" onClick={() => nextPage("200%")}>
          Projects
        </button>
        <button
          className="next-back-btn"
          onClick={() => nextPage(window.innerHeight * 3)}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default HomePage;

import "./HomePage.css";
import About from "../AboutMe/About";
import Projects from "../Projects/Projects";
import cat from "../../images/cat.jpg";
import downchevron from "../../images/down-chevron.png";
import ContactMe from "../ContactMe/ContactMe";

const HomePage = () => {
  const nextPage = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="HomePage">
      <div className="HomePage-div">
        <h1>Ruwaidah Alfakhri</h1>
        <h3>Full Stack Web Developer</h3>
        <img src={cat} />
        <div className="img-div">
          <button onClick={nextPage}>Next</button>
          {/* <img src={downchevron} /> */}
        </div>
      </div>
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default HomePage;

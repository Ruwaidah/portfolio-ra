import "./HomePage.css";
import About from "../AboutMe/About";
import Projects from "../Projects/Projects";


const HomePage = () => {
  const nextPage = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="HomePage">
      <h1>Ruwaidah Alfakhri</h1>
      <h3>Full Stack Web Developer</h3>
      <button onClick={nextPage}>Next</button>
      <About />
      <Projects />

    </div>
  );
};

export default HomePage;

import Boo from "./Boo/Boo";
import MovieKnight from "./MovieKnight/MovieKnight";
import "./Projects.css";

const Projects = () => {
  return (
    <div
      className="Projects"
      style={{ position: "absolute", top: window.innerHeight * 2 }}
    >
      <h2>Projects</h2>
      <Boo />
      <MovieKnight />
    </div>
  );
};

export default Projects;

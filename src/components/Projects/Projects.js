import { useState } from "react";
import Boo from "./Boo/Boo";
import MovieKnight from "./MovieKnight/MovieKnight";
import "./Projects.css";

const Projects = () => {
  const [isBoo, setIsBoo] = useState(false);
  const [isMovie, setIsMovie] = useState(false);
  const showBoo = () => {
    setIsBoo(true);
  };

  const showMovie = () => {
    setIsMovie(true);
  };
  return (
    <div
      className="Projects"
      style={{ position: "absolute", top: window.innerHeight * 2 }}
    >
      <h2>Projects</h2>
      <div className="projects-btns" id={isBoo || isMovie ? "hideBtn" : null}>
        <button className="boo-btn" onClick={showBoo}>
          Boo Project
        </button>
        <button className="movie-btn" onClick={showMovie}>
          MovieKnight Project
        </button>
      </div>
      <Boo isBoo={isBoo} setIsBoo={setIsBoo}/>
      <MovieKnight isMovie={isMovie} setIsMovie={setIsMovie} />
    </div>
  );
};

export default Projects;

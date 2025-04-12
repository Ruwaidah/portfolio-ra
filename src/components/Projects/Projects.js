import { useState } from "react";
import Boo from "./Boo/Boo";
import boo from "../../images/Boo.png";
import movieKnight from "../../images/movieKnight.png";
import MovieKnight from "./MovieKnight/MovieKnight";
import hashChat from "../../images/hashchat.png";
import "./Projects.css";
import HashChat from "./HashChat/HashChat";

const Projects = () => {
  const [viewProject, setViewProject] = useState(null);
  console.log(window.innerHeight);
  return (
    <div
      className="Projects"
      // style={{ position: "absolute", top: window.innerHeight * 2 + 180 }}
    >
      <h2>Projects</h2>
      {!viewProject && (
        <div className="projects-views">
          <div className="project-card">
            <img src={boo} />
            <div>
              <p>Boo</p>
              <button onClick={() => setViewProject("boo")}>
                View more...
              </button>
            </div>{" "}
          </div>
          <div className="project-card">
            <img src={movieKnight} />
            <div>
              <p>MovieKnight</p>
              <button onClick={() => setViewProject("movieKnight")}>
                View more...
              </button>
            </div>
          </div>
          <div className="project-card">
            <img src={hashChat} />
            <div>
              <p>HashChat</p>
              <button onClick={() => setViewProject("hashChat")}>
                View more...
              </button>
            </div>{" "}
          </div>
        </div>
      )}
      {viewProject === "hashChat" && (
        <HashChat setViewProject={setViewProject} />
      )}
      {viewProject === "boo" && <Boo setViewProject={setViewProject} />}
      {viewProject === "movieKnight" && (
        <MovieKnight setViewProject={setViewProject} />
      )}
    </div>
  );
};

export default Projects;

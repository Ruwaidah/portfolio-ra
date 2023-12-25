import "./Projects.css";

const Projects = () => {
  const back = () => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  const next = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="Projects"
      style={{ position: "absolute", top: window.innerHeight * 2 }}
    >
      <h2>Projects</h2>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Projects;

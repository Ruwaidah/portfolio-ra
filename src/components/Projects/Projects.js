import "./Projects.css";

const Projects = () => {
  const back = () => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  const toTop = () => {
    window.scrollBy({
      top: -window.innerHeight * 2,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="Projects"
      style={{ position: "absolute", top: window.innerHeight * 2 }}
    >
      <h2>Projects</h2>
      <button onClick={toTop}>Scroll To Top</button>
      <button onClick={back}>Back</button>
    </div>
  );
};

export default Projects;

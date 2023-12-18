import "./About.css";


const About = () => {
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
      className="About"
      style={{ position: "absolute", top: window.innerHeight }}
    >
      <h2>About</h2>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default About;

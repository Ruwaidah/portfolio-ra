import "./ContactMe.css";

const ContactMe = () => {
    const toTop = () => {
        window.scrollBy({
          top: -window.innerHeight * 3,
          behavior: "smooth",
        });
      };

      const back = () => {
        window.scrollBy({
            top: -window.innerHeight,
            behavior: "smooth",
          });
      }
  return (
    <div className="ContactMe"  style={{ position: "absolute", top: window.innerHeight*3 }}>
      <h4>Contact Me</h4>
      <button onClick={back}>Back</button>
      <button onClick={toTop}>Scroll To Top</button>

    </div>
  );
};

export default ContactMe;

import "./ContactMe.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

const ContactMe = () => {
  return (
    <div
      className="ContactMe"
      // style={{ position: "absolute", top: window.innerHeight * 3 }}
    >
      <div className="email-div">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" />
        <p> ruwaidah.riyadh@gmail.com</p>
      </div>{" "}
      <div className="github-linkedin">
        <a href="https://github.com/Ruwaidah">
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/material-outlined/96/FFFFFF/github.png"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/ruwaidah-a-930b9a8b/">
          <img src={linkedin} />
        </a>
      </div>{" "}
    </div>
  );
};

export default ContactMe;

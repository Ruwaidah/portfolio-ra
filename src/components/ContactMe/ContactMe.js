import "./ContactMe.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import resume from "../../images/resume.png";

const ContactMe = () => {
  return (
    <div
      className="ContactMe"
    >
      <div className="email-div">
        <img
          className="gmail-logo"
          alt="gmail-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
        />
        <p> ruwaidah.riyadh@gmail.com</p>
      </div>{" "}
      <div className="github-linkedin">
        <a href="https://github.com/Ruwaidah" target="_blank">
          <img width="96" height="96" src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ruwaidah-a-930b9a8b/"
          target="_blank"
          alt="linkedin"
        >
          <img src={linkedin} />
        </a>
        <a href="https://app.enhancv.com/share/50b87f57/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank">
          <img src={resume} alt="resume" />
        </a>
      </div>{" "}
    </div>
  );
};

export default ContactMe;

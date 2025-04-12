import hashChat from "../../../images/hashchat.png";
import "./HashChat.css";

const HashChat = (props) => {
  return (
    <div
      // id={props.isHashChat ? `showBoo` : null}
      className="project-temp Boo-proj"
    >
      <div>
        <img src={hashChat} />
        <h4>HashChat</h4>

        <ul>
          <li>
            Chat messaging of real-time digital communication that allows users
            to send and receive text.
          </li>
          <li>
            making conversations faster, more accessible, and more engaging.
          </li>
          <li>Customize your profile with a photo, status, and bio.</li>
          <li>Frontend: HTML, CSS, JavaScript (React.js)</li>
          <li>Backend: Node.js with Express.</li>
          <li>Authentication: JWT (JSON Web Tokens) for session management.</li>
          <li>WebSockets: For real-time messaging (Socket.io)</li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/hashtag-fe" target="_blank">
              Front end
            </a>
            .
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/hashtagserver" target="_blank">
              Back end
            </a>
            .
          </li>
          <li>
            {" "}
            Link to the App:{" "}
            <a href="https://boo-7emc.onrender.com/" target="_blank">
              Boo Website
            </a>
            .
          </li>
        </ul>
        <button
          className="cancel-btn"
          onClick={() => props.setViewProject(null)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default HashChat;

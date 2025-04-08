import boo from "../../../images/Boo.png";
import "./Boo.css";

const Boo = () => {
  return (
    <div className="project-temp" id="Boo-proj">
      <div>
        <img src={boo} />
        <h4>Boo</h4>

        <ul>
          <li>
            Search for and display pet listings based on pet characteristics,
            location, and status.
          </li>
          <li>
            Search for and display animal welfare organizations based on
            organization name, ID, and location. display profiles of local
            organizations.
          </li>
          <li>
            Help users find their perfect pets by location, breed, and other
            characteristics.
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/boo" target="_blank">
              Front end
            </a>
            .
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/boo-server" target="_blank">
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
        {/* <button className="cancel-btn" onClick={() => props.setIsBoo(false)}>
          Cancel
        </button> */}
      </div>
    </div>
  );
};

export default Boo;

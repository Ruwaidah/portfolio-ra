import boo from "../../../images/Boo.png";
import "./Boo.css";

const Boo = (props) => {
  console.log(props.isBoo)
  return (
    <div id={props.isBoo? `showBoo` :  null} className="project-temp Boo-proj">
      <h4>Boo</h4>
      <div>
        <img src={boo} />
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
            </a>.
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/boo-server" target="_blank">
              Back end
            </a>.
          </li>
          <li>
            {" "}
            Link to the App:{" "}
            <a href="https://boo-7emc.onrender.com/" target="_blank">
              Boo Website
            </a>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Boo;

import boo from "../../../images/Boo.png";
import "./Boo.css";

const Boo = () => {
  return (
    <div className="project-temp">
      <h4>Boo</h4>
      <div>
        <img src={boo} />
        <p>
          Search for and display pet listings based on pet characteristics,
          location, and status. Search for and display animal welfare
          organizations based on organization name, ID, and location. display
          profiles of local organizations. Help users find their perfect pets by
          location, breed, and other characteristics.
        </p>
      </div>
    </div>
  );
};

export default Boo;

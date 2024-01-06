import "./MovieKnight.css";
import movieKnight from "../../../images/movieKnight.png";
const MovieKnight = () => {
  return (
    <div className="project-temp movieknight">
      <h4>Movie Knight</h4>
      <div>
        <img src={movieKnight} />
        <ul>
          <li>
            displays movies showing in theaters within the zip code you've
            search for.
          </li>
          <li>
            provides more detailed information about each movie if required.
          </li>
          <li>
            allows users to select their preferences for a movie going
            experience.
          </li>
          <li>
            filters available movies that match those preferences for the user.
          </li>
          <li>
            used Jest and React-Testing-Library to test our front end code.
          </li>
          <li>Front end built using React.</li>
          <li>Back end built using Node.js and Express.</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieKnight;

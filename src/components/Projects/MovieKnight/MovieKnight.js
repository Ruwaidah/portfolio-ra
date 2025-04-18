import "./MovieKnight.css";
import movieKnight from "../../../images/movieKnight.png";
import movieknight01 from "../../../images/movieknight01.png";
import movieknight02 from "../../../images/movieknight02.png";

const MovieKnight = (props) => {
  return (
    <div className="project-temp movieknight-proj">
      <div className="header-img">
        <img src={movieKnight} />
        <img src={movieknight01} />
        <img src={movieknight02} />
      </div>
      <a
        className="project-name"
        href="https://movieknight.onrender.com/"
        target="_blank"
      >
        {" "}
        Movie Knight{" "}
      </a>
      <ul>
        <li>
          Front end built using React and the Back end built using Node.js and
          Express.{" "}
        </li>
        <li>
          displays movies showing in theaters within the zip code you've search
          for.
        </li>
        <li>
          provides more detailed information about each movie if required.
        </li>
        <li>
          allows users to select their preferences for a movie going experience.
        </li>
        <li>
          filters available movies that match those preferences for the user.
        </li>
        <li>
          Link to the Github:
          <a href="https://github.com/Ruwaidah/movie_knight_be" target="_blank">
            {" "}
            Back end
          </a>
        </li>
        <li>
          {" "}
          Link to the Github:{" "}
          <a href="https://github.com/Ruwaidah/movie-knight-fe" target="_blank">
            {" "}
            Front end{" "}
          </a>
        </li>

        <li>
          {" "}
          Link to the App:{" "}
          <a href="https://movieknight.onrender.com/" target="_blank">
            {" "}
            MoviKnight{" "}
          </a>
        </li>
      </ul>
      <button className="cancel-btn" onClick={() => props.setViewProject(null)}>
        Cancel
      </button>
    </div>
  );
};

export default MovieKnight;

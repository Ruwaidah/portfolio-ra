import "./MovieKnight.css";
import movieKnight from "../../../images/movieKnight.png";
const MovieKnight = (props) => {
  return (
    <div
      className="project-temp movieknight-proj"
      id={props.isMovie ? "showMovie" : null}
    >
      <h4>Movie Knight</h4>
      <div>
        <img src={movieKnight} />
        <ul>
          <li>Front end built using React.</li>
          <li>Back end built using Node.js and Express.</li>
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
          <li>
            Link to the Github:
            <a
              href="https://github.com/Ruwaidah/movie_knight_be"
              target="_blank"
            >
              {" "}
              Back end
            </a>
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a
              href="https://github.com/Ruwaidah/movie-knight-fe"
              target="_blank"
            >
              {" "}
              Front end{" "}
            </a>
          </li>

          <li>
            {" "}
            Link to the App:{" "}
            <a href="https://movieknight.onrender.com/" target="_blank">
              {" "}
              MoviKnight Website{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieKnight;

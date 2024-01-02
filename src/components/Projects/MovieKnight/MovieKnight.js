import "./MovieKnight.css";
import movieKnight from "../../../images/movieKnight.png"
const MovieKnight = () => {
  return (
    <div className="MovieKnight-project">
        <img src={movieKnight} />
      <h4>Movie Knight</h4>
      <p>
        displays movies showing in theaters within the zip code you've search
        for provides more detailed information about each movie if required
        allows users to select their preferences for a movie going experience
        filters available movies that match those preferences for the user
      </p>
    </div>
  );
};

export default MovieKnight;

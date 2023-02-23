import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  console.log(movieId);

  const movieChoice = movies.find((movie) => movie.id === movieId);

  console.log(movieChoice);
  return (
    <div className="comp purple">
      <h1>patatas</h1>
    </div>
  );
}

export default MovieDetails;

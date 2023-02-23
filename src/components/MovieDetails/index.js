import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();

  const movieChoice = movies.find((el) => el.id === parseInt(movieId));

  console.log("useParams es", movieId);

  console.log(movies);

  console.log("movieChoice es", movieChoice);

  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;

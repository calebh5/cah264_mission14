import { useEffect, useState } from 'react';
import { Movie } from '../MovieVariables/movieVariables';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/Movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  const editedMovies = movieData
    .filter((m) => m.edited == 'Yes')
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="row">
        <h4>Joel Hiltons Movie List</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {editedMovies.map((m) => (
            <tr key={m.movieId}>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;

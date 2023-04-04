import { useState } from 'react';
import data from '../MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [listOMovies] = useState(mds);

  return (
    <>
      <br></br>
      <div style={{ textAlign: 'center' }}>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {listOMovies.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
}

export default MovieList;

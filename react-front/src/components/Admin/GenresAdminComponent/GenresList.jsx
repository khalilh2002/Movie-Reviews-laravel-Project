import { useEffect, useState } from "react";
import axios from "../../Api/Axios";
import DeleteGenre from "./DeleteGenre";
import EditGenre from "./EditGenre";
import AddGenre from "./AddGenre";

function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get("/genres");
      setGenres(response.data);
    };

    fetchGenres();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Genres Information</h2>
        <AddGenre></AddGenre>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Action</th>
            {/* Add an action column if needed (e.g., edit/delete) */}
          </tr>
        </thead>
        <tbody>
          {genres ? (
            genres.map((genre, index) => (
              <tr key={index}>
                <td className="text-center">{genre.id}</td>
                <td> {genre.name} </td>
                <td>
                  <div>
                    <EditGenre id={genre.id} genreName={genre.name}></EditGenre>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        DeleteGenre(genre.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <p>loading...</p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GenreList;

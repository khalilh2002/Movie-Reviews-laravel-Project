import { useEffect, useState } from "react";
import axios from "../Api/Axios";
import GetRandomColor from "./GetRandomColor";

// eslint-disable-next-line react/prop-types
function TopGenre({ id }) {
  const name = 'm-1';

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(`profile/topGenre/${id}`)
      .then(response => {
        console.log(response.data);
        setGenres(response.data); // Set genres in the state
      })
      .catch(error => {
        console.error('Error fetching genres:', error);
      });
  }, [id]);

  const createBadge = (genre, index) => {
    const badgeStyle = {
      backgroundColor: GetRandomColor(),
      padding: '10px',
      fontFamily: 'sans-serif'
    };

    return (
      <span className={`badge ${name}`} style={badgeStyle} key={index}>
        {genre.genre_name}
      </span>
    );
  };

  

  return (
    <div className=''>
      <ul className='genres list-unstyled'>
        {genres.map((genre, index) => (
          <li className='genre' key={index}>
            {createBadge(genre, index)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopGenre;

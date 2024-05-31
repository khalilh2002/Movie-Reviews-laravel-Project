import { useEffect, useState } from "react";
import axios from "../Api/Axios";

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
      backgroundColor: getRandomColor(),
      padding: '10px',
      fontFamily: 'sans-serif'
    };

    return (
      <span className={`badge ${name}`} style={badgeStyle} key={index}>
        {genre.genre_name}
      </span>
    );
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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

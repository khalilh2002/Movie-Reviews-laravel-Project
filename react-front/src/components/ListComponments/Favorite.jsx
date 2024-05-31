


function Favorite(){
    const fakeData = [
      {
        title: 'The Great Adventure',
        score: 8.5,
        genre: 'Action',
        type: 'Movie',
        imageUrl: 'https://picsum.photos/100',
      },
      {
        title: 'Infinite Horizon',
        score: 7.2,
        genre: 'Sci-Fi',
        type: 'TV Show',
        imageUrl: 'https://picsum.photos/100',
      },
      {
        title: 'Lost in Time',
        score: 6.9,
        genre: 'Drama',
        type: 'Movie',
        imageUrl: 'https://picsum.photos/100',
      },
    ];
  
    return (
      <table className="table table-borderless">
        <thead className=" table-head text-primary">
          <tr>
            <th></th>
            <th>Title</th>
            <th>Score</th>
            <th>Genre</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((item, index) => (
            <tr key={index}>
              <td className="text-center">
                <img src={item.imageUrl} alt="Poster" width={100} />
              </td>
              <td>{item.title}</td>
              <td>{item.score}</td>
              <td>{item.genre}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default Favorite;
import GetList from "./GetList";

function PlanToWatch() {
  const { list, error } = GetList("plan_to_watch");

  return (
    <div className="container my-4">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                <img 
                  src={item.poster_img} 
                  alt={item.title} 
                  className="img-thumbnail" 
                  style={{ width: '100px', height: 'auto' }} 
                />
              </td>
              <td>{item.title}</td>
              <td>{item.genre.name}</td>
              <td>{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanToWatch;

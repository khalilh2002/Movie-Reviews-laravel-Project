import GetBaseUrl from "../Api/GetBaseUrl";
import GetUser from "../Auth/GetUser";
import FactoryDeleteToList from "./FactoryDeleteList";
import GetList from "./GetList";

function Favorite() {
  const { list, error } = GetList("favorite");
  const baseUrl = GetBaseUrl()

  async function deleteShow(typeList , id) {
    const listData = await FactoryDeleteToList(typeList ,GetUser().id , id );
    alert(listData)
  }

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
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                <img 
                  src={baseUrl+item.poster_img} 
                  alt={item.title} 
                  className="img-thumbnail" 
                  style={{ width: '100px', height: 'auto' }} 
                />
              </td>
              <td>{item.title}</td>
              <td>{item.genre.name}</td>
              <td>{item.rate}</td>
              <td>
                <button className="btn btn-outline-danger" onClick={()=>{deleteShow('favorite' ,item.id)}}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorite;

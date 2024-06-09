import axios from '../../Api/Axios'
import  { useEffect, useState } from 'react'
import GetToken from '../../Auth/GetToken'
import DeleteUser from './DeleteUser'



function UserList() {
    const [users , setUsers] = useState([])
    useEffect(()=>{
        axios.get("/admin/users",  {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${GetToken()}`
            },
          })
          .then((Response)=>{
            setUsers(Response.data);
            console.log(Response.data);
          })
          .catch((Error)=>{
            alert(Error.message)
          })
    },[])

    

  return (
    <div className="container mt-5">
    <h2 className="mb-4">User Information</h2>
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button className="btn btn-info btn-sm mr-2">View</button>
              <button className="btn btn-warning btn-sm mr-2">Edit</button>
              <button className="btn btn-danger btn-sm" onClick={()=>{DeleteUser(user.id)}}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default UserList

import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import axios from "../Api/Axios";
import GetToken from "../Auth/GetToken";
import './Css/AdminDashBoard.css';  // Import custom CSS

function AdminDashBoard() {
  const [totalGenres, setTotalGenres] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalShows, setTotalShows] = useState(0);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("/genres");
        setTotalGenres(Object.keys(response.data).length);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get("/admin/users", {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${GetToken()}`
          }
        });
        setTotalUsers(Object.keys(response.data).length);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchShows = async () => {
      try {
        const response = await axios.get('/shows');
        setTotalShows(Object.keys(response.data).length);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchGenres();
    fetchUsers();
    fetchShows();
    
  }, []);

  return (
    <div className="admin-dashboard">
      <AdminHeader />
      <div className="container mt-4">
        <h2>Admin Dashboard</h2>
        <table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Entity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Users</td>
              <td>{totalUsers}</td>
            </tr>
            <tr>
              <td>Genres</td>
              <td>{totalGenres}</td>
            </tr>
            <tr>
              <td>Shows</td>
              <td>{totalShows}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashBoard;

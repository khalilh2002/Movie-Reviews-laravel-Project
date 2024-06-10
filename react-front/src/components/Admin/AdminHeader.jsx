import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/Admin">Admin Dashboard</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Admin/Users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin/Shows">Shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin/Genres">Genres</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin/News">News</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;

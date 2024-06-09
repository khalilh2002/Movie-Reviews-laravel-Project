import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, Form } from "react-bootstrap/";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have this import if you haven't already
import EditProfile from "./EditProfile";

export default function Header() {
  const [profile, setProfile] = useState("");
  const [logo] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/6/61/AniList_logo.svg"
  );
  const [username, setUsername] = useState("");
  const [base] = useState("http://localhost:8000/");

   

  useEffect(() => {
    const sessionToken = localStorage.getItem('session_token');
    const userInfo = localStorage.getItem('user_info');

    if (sessionToken && userInfo) {
      const user = JSON.parse(userInfo);
      setUsername(user.name);
      setProfile(user.profile_picture);
    }
  }, []);

  return (
    <header className="p-3 mb-2 border-bottom bg-light ">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link
            className="d-flex align-items-center mb-2  mb-lg-0 link-body-emphasis text-decoration-none mx-4"
            to="/home"
          >
            <img src={logo} width={32} height={32} alt="Logo" />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-bold">
            <li>
              <Link to="/All/News/" className="nav-link px-2 link-body-emphasis">
                News
              </Link>
            </li>
            <li>
              <Link to="/Profile" className="nav-link px-2 link-body-emphasis">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/User/List" className="nav-link px-2 link-body-emphasis">
                List
              </Link>
            </li>
          </ul>

          <div className="d-flex mx-4">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </div>

          {username ? (
            <Dropdown className="text-end bg-transparent mx-5">
              <Dropdown.Toggle className="bg-transparent border-0 p-0 d-flex align-items-center">
                <img
                  src={`${base}${profile}`}
                  width={32}
                  height={32}
                  className="rounded-circle border border-2 border-dark"
                  alt="Profile"
                />
                <h5 className="text-dark text-weight-bold ms-3 mb-0">
                  {username}
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu className="text-small">
                <Dropdown.Item as={Link} to="/Profile" className="text-dark">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/User/List" className="text-dark">
                  My List
                </Dropdown.Item>
                
                <Dropdown.Item as={Link} to="/Logout" className="text-dark">
                  Sign out
                </Dropdown.Item>

                <EditProfile></EditProfile>

              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <ul className="nav">
              <li>
                <Link to="/Login" className="nav-link px-2 link-secondary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Logout" className="nav-link px-2 link-secondary">
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/Register" className="nav-link px-2 link-secondary">
                  Register
                </Link>
              </li>
            </ul>
          )}
          <Button className="btn-warning" onClick={()=>{
            localStorage.clear();
          }}>clear ⚠</Button>
        </div>
      </div>
    </header>
  );
}

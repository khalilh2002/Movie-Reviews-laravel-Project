import { useState ,  } from "react";
import axios from "./Api/Axios";
import { Button, Card } from "react-bootstrap/";
import { useNavigate } from "react-router";
import Header from './Header'

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email , password);
    let data = {
      email: email, // Assuming email is used as the username
      password: password,
    }
    try {
      const response = await axios.post(
        "/login",
        data,
        { headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
              },
          withCredentials: true }
      );
      console.log(response);
      
      if (response.status==200 ) {
        const user = response.data.user;
        const token = response.data.token;

        const expirationTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

        localStorage.clear();
        let data = {token, expirationTime};
        localStorage.setItem('session_token', JSON.stringify( data));
        localStorage.setItem('user_info', JSON.stringify(user));

        if (user.role === "Admin") {
          navigate('/Admin');
        } else {
            navigate('/home');
        }
      
        
      }
    } catch (error) {
      console.error("Login failed", error);
      alert(error);
    }
    
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Header></Header>
      <div className="d-flex justify-content-center align-items-center p-3 m-4">
        <Card>
          <Card.Body>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              
              />
              <div id="emailHelp" className="form-text">
                {" "}
                We ll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button  onClick={handleSubmit}  className="btn btn-primary">
              Submit
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default LoginForm;

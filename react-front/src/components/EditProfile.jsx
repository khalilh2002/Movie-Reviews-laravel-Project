import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from './Api/Axios';
import GetToken from './Auth/GetToken';

function EditProfile() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [cover, setCover] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState(null);
  const [id, setId] = useState('');

  useEffect(() => {
    const tmp = JSON.parse(localStorage.getItem('user_info'));
    if (tmp) {
      setUser(tmp);
      setCover(null);
      setProfile(null);
      setEmail(tmp.email);
      setName(tmp.name);
      setId(tmp.id);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('email', email);
    if (profile) {
      formData.append('profile', profile);
    }
    if (cover) {
      formData.append('cover', cover);
    }

    axios.post("/edit/user", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${GetToken()}`
      },
    })
    .then((response) => {
      console.log(response);
      const updatedUser = response.data.user;
      localStorage.setItem('user_info', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setShow(false); // Close the modal on successful submission
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile: {user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProfileImage">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                name="profile"
                onChange={(e) => setProfile(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCoverImage">
              <Form.Label>Cover Image</Form.Label>
              <Form.Control
                type="file"
                name="cover"
                onChange={(e) => setCover(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;

import  { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from '../../Api/Axios';
import GetToken from '../../Auth/GetToken';

// eslint-disable-next-line react/prop-types
function EditUser({ id }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isCheckedProfile, setIsCheckedProfile] = useState(false);
  const [isCheckedCover, setIsCheckedCover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchData = () => {
    axios.get('/user/' + id, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${GetToken()}`
      } })
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  

  const handleShow = () => {
    setShowModal(true);
    fetchData();
  }

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
   
    const formData = new FormData()
    formData.append('id',id)
    formData.append('name',name)
    formData.append('email',email)
    formData.append('removeProfile',isCheckedProfile.toString())
    formData.append('removeCover',isCheckedCover.toString())


    axios.post('edit/user/', formData ,{
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${GetToken()}`
        }})
      .then((response) => {
        console.log('User data updated:', response.data);
        handleClose();
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  return (
    <div>
      <Button variant="warning" size="sm" onClick={handleShow}>Edit</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              id="checkbox_profile"
              label="Remove Profile"
              checked={isCheckedProfile}
              onChange={() => setIsCheckedProfile(!isCheckedProfile)}
            />

            <Form.Check
              type="checkbox"
              id="checkbox_cover"
              label="Remove Cover"
              checked={isCheckedCover}
              onChange={() => setIsCheckedCover(!isCheckedCover)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default EditUser;

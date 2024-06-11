import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from '../../Api/Axios';
import GetToken from '../../Auth/GetToken';



// eslint-disable-next-line react/prop-types
function EditShow({ id , genreName}) {
  const [name, setName] = useState(genreName);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);

  };

  const handleClose = () => setShowModal(false);


  const handleSave = () => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
   


    axios.post('/edit/genre', formData,  {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${GetToken()}`
        }
    })
    .then((response) => {
      if (response.status === 200) {
        handleClose();
      }
    })
    .catch((error) => {
      console.error('Error saving show data:', error);
    });
  };


  return (
    <div>
      <Button variant="warning" size="sm" onClick={handleShow}>Edit</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Show</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Genre Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            
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

export default EditShow;

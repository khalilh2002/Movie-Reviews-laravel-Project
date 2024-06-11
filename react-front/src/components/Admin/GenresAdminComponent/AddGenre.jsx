import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "../../Api/Axios";
import GetToken from "../../Auth/GetToken";

function AddGenre() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleSave = async () => {
    const trimmedName = name.trim(); // Trim leading/trailing whitespace

    if (!trimmedName) {
      alert("Please enter a genre name.");
      return; // Prevent form submission if name is empty
    }

    try {
      const response = await axios.post(
        "/add/genre",
        { name: trimmedName },
        {
          headers: {
            Authorization: `Bearer ${GetToken()}`,
          },
        }
      );
      console.warn(response);
      if (response.status === 201) {
        alert("Genre added successfully!");
        setName(""); // Clear form after successful submission
        handleClose();
      }
    } catch (error) {
      console.error("Error adding genre:", error);
      alert("An error occurred. Please try again."); // Inform user about the error
    }
  };

  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Add Genre
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGenreName">
              <Form.Label>Genre Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Genre
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddGenre;

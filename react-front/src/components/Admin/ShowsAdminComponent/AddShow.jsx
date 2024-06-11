import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "../../Api/Axios";
import GetToken from "../../Auth/GetToken";

function AddShow() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genreId, setGenreId] = useState("");
  const [genres, setGenres] = useState([]);
  const [rate, setRate] = useState("");
  const [isCheckedPoster, setIsCheckedPoster] = useState(false);
  const [showFile, setShowFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const fetchGenres = () => {
    axios
      .get("/genres")
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  };

  
    const handleShow = () => {
        setShowModal(true)
        fetchGenres()
    };

  const handleSave = () => {
    if (rate>100) {
        alert('rate is too big  0 < rate < 100')
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("release_date", releaseDate);
    formData.append("genre_id", genreId);
    formData.append("rate", rate);

    if (isCheckedPoster) {
      // No poster upload needed
    } else if (showFile) {
      formData.append("poster_img", showFile);
    }

    axios
      .post("/add/show", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${GetToken()}`
        }
    })
      .then((response) => {

        if (response.status == 201) {
            alert('saved')

            handleClose();
        }
      })
      .catch((error) => {
        console.error("Error saving show data:", error);
      });
  };

  const handleFileChange = (event) => {
    setShowFile(event.target.files[0]);
  };

  return (
    <div>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Add Show
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Show</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formReleaseDate">
              <Form.Label>Release Date (Optional)</Form.Label>
              <Form.Control
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGenreId">
              <Form.Label>Genre (Optional)</Form.Label>
              <Form.Select
                value={genreId}
                onChange={(e) => setGenreId(e.target.value)}
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Control
              type="number"
              min="0"
              max="100"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <Form.Check
              type="checkbox"
              id="checkbox_poster"
              label="Remove Poster (if already exists)"
              checked={isCheckedPoster}
              onChange={() => setIsCheckedPoster(!isCheckedPoster)}
            />
            {showFile && <p>Selected poster: {showFile.name}</p>}
            <Form.Group className="mb-3">
              <Form.Label>Upload Poster (Optional)</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Show
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddShow;

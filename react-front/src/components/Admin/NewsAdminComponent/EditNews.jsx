import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from '../../Api/Axios';
import GetToken from '../../Auth/GetToken';

// eslint-disable-next-line react/prop-types
function EditNews({ id }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showId, setShowId] = useState('');
  const [shows, setShows] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      fetchNewsData();
      fetchShows();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const fetchNewsData = () => {
    axios.get(`/news/${id}`)
      .then((response) => {
        const newsData = response.data;
        setTitle(newsData.title);
        setContent(newsData.content);
        setShowId(newsData.show_id);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  };

  const fetchShows = () => {
    axios.get('/shows')
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
      });
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('show_id', showId);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    axios.post('/edit/news', formData, {
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
        console.error('Error fetching shows:', error);
    });
  };

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="warning" size="sm" onClick={handleShow}>Edit</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit News</Modal.Title>
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
            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formShowId">
              <Form.Label>Show (Optional)</Form.Label>
              <Form.Select value={showId} onChange={(e) => setShowId(e.target.value)}>
                <option value="">Select Show</option>
                {shows.map((show) => (
                  <option key={show.id} value={show.id}>
                    {show.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {imageFile && (
              <p>Selected image: {imageFile.name}</p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Upload New Image (Optional)</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
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

export default EditNews;
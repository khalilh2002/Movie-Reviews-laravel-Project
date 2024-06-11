import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from './Api/Axios';
import GetBaseUrl from './Api/GetBaseUrl';
import { useNavigate } from 'react-router';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/search-shows', {
        params: { query }
      });
      setResults(response.data);
      setShowModal(true);  // Show the modal with the search results
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  const handleShowDetails = (show) => {
    setSelectedShow(show);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedShow(null);
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" variant="outline-primary">Search</Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedShow ? (
            <div>
              <img src={GetBaseUrl()+selectedShow.poster_img} alt={selectedShow.title} style={{ maxWidth: '50px' }} />
                <hr />
              <h4>{selectedShow.title}</h4>
              <p>{selectedShow.description}</p>
              <p>Release Date: {selectedShow.release_date}</p>
              <p>Rating: {selectedShow.rate}</p>
              
              <hr />
              <div className='d-flex justify-content-around'>
                <Button variant="secondary" onClick={() => setSelectedShow(null)}>Back to Results</Button>
                <Button variant="success" onClick={() => navigate('/show/'+selectedShow.id)}>Go to Show</Button>
              </div>
              
            </div>
          ) : (
            <div>
              {results.length > 0 ? (
                <ul>
                  {results.map(show => (
                    <li key={show.id} style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => handleShowDetails(show)}>
                      {show.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No results found</p>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Search;

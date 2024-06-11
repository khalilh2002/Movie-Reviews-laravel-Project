import { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import axios from '../../Api/Axios';
import GetBaseUrl from '../../Api/GetBaseUrl';

// eslint-disable-next-line react/prop-types
function ViewShow({ id }) {
  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('/show/' + id);
      setShow(response.data);
      console.log(response.data.title);
    } catch (error) {
      console.error('Error fetching show data:', error);
    }
  };

  const handleShow = () => {
    setShowModal(true);
    fetchData();
  };

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Button variant="info" size="sm" onClick={handleShow}>View</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{show ? show.title : 'Loading...'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {show ? (
            <>
              <div className='d-flex justify-content-center align-items-center'>
                <Image src={GetBaseUrl() + show.poster_img} thumbnail alt="profile" />
              </div>
              <hr />
              <div className='d-flex justify-content-center align-items-center p-2'>
                <h5> <span style={{ color:"gray"}}>Description:</span> {show.description}</h5>
              </div>

              <hr />
              <div className='d-flex justify-content-around  align-items-center'>
                <h6>Release Date:  <span style={{color:"blue" , fontStyle:'italic'}}>{show.release_date}</span></h6>

                <h6>Rated: <span style={{color:"red", fontWeight:'bold'}}>{show.rate}</span>/100</h6>

              </div>
              <hr />
              <div className='d-flex justify-content-center align-items-center'>
                <p>Created at: {new Date(show.created_at).toLocaleString()}</p>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewShow;

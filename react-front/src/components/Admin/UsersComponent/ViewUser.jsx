
import  { useState } from 'react';
import { Button, Modal ,Image } from 'react-bootstrap';
import axios from '../../Api/Axios';
import GetBaseUrl from '../../Api/GetBaseUrl';
import GetToken from '../../Auth/GetToken';
// eslint-disable-next-line react/prop-types
function ViewUser({ id }) {
    const [user,setUser]=useState({})
  const [showModal, setShowModal] = useState(false);

    
      const fetchData = async () => {
        try {
          const response = await axios.get('/user/' + id ,{
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${GetToken()}`
            } });
          setUser(response.data);
          console.log(response.data.title);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
        

  const handleShow = () =>{ 
    setShowModal(true)
    fetchData();
  };
  const handleClose = () => setShowModal(false);

  

  return (
    <div>
      <Button variant="primary" size="sm" onClick={handleShow}>View</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {user ? user.name : 'loading..'} </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {user ? (
            <>
              <div className='d-flex justify-content-center algin-items-center'>
                  <Image src={GetBaseUrl()+user.profile_picture} thumbnail alt="profile" />
              </div>
              
              <hr />
              
              <div className='d-flex justify-content-center algin-items-center'>
                  <h5>Email : {user.email}</h5>
              </div>
              
              <hr />

              <div className='d-flex justify-content-center algin-items-center'>
                  <p>created at : {Date(user.created_at) }</p>
              </div>
            </>
            

          ) : <p>loading ..</p> }
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default ViewUser;

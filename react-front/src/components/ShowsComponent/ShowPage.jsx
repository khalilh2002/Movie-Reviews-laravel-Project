import { Col, Row, Container, Card, Badge, Button } from "react-bootstrap";
import Header from "../Header";
import axios from "../Api/Axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Rate from "./Rate";
import GetBaseUrl from "../Api/GetBaseUrl";
import "./Css/ShowPage.css"; // Custom CSS file
import FactoryAddToList from "../ListComponments/FactoryAddToList";
import GetUser from "../Auth/GetUser";

function ShowPage() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`show/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the show data!", error);
      });
  }, [id]);


 


  if (!show) {
    return <div>Loading...</div>;
  }

  async function addToList(typeList) {
    const listData = await FactoryAddToList(typeList ,GetUser().id , id );
    alert(listData)
  }




  return (
    <div className="show-page-container">
      <Header />
      <Container>
        
        <Row className="my-4">
          <Col md={4}>
            <Card className="show-poster-card">
              <Card.Img variant="top" src={GetBaseUrl() + show.poster_img} alt={show.title} />
            </Card>
          </Col>

          <Col md={8}>
            <Card className="show-details-card">
              <Card.Body>
                <Card.Title>{show.title}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> {show.description}
                </Card.Text>
                <Card.Text>
                  <strong>Rating:</strong>{" "}
                  <Badge bg="primary" className="show-rating-badge">
                    <span id="showRate">{show.rate}</span> / 100
                  </Badge>
                  <Rate show_id={show.id} documentId={"showRate"}></Rate>

                    <Button className="mx-3" onClick={()=>{addToList('favorite')}} >Heart</Button>
                    <Button className="mx-3" onClick={()=>{addToList('plan_to_watch')}} >Plan to watch</Button>

                </Card.Text>

                <Card.Text>
                  <strong>Release Date:</strong> {show.release_date}
                </Card.Text>
                {/* Add more show details as necessary */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShowPage;

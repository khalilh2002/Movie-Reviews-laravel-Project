import { Col, Row, Container, Card, Badge } from "react-bootstrap";
import Header from "../Header";
import axios from "../Api/Axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Rate from "./Rate";

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

  return (
    <div>
      <Header />
      <Container>
        <Row className="my-4">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={show.poster_img} alt={show.title} />
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>{show.title}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> {show.description}
                </Card.Text>
                <Card.Text>
                  <strong>Rating:</strong>{" "}
                  <Badge bg="success"><span  id="showRate" >{show.rate}</span> / 100</Badge>
                  <Rate show_id={show.id} documentId={"showRate"} ></Rate>
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

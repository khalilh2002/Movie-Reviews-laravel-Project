import { Card, Container, Row, Col, Button } from "react-bootstrap";
import axios from "../Api/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetBaseUrl from "../Api/GetBaseUrl";

function ShowsList() {
  const [shows, setShows] = useState([]);
  const baseUrl = GetBaseUrl();

  useEffect(() => {

    axios
      .get("shows")
      .then((response) => {
        console.log(response.data);
        setShows(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the shows!", error);
      });
  }, []);


  return (
    <Container>
      <Row>
        {shows.map((show, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Link to={`/Show/${show.id}`}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={baseUrl+show.poster_img}
                  alt={show.title}
                />
                <Card.Body>
                  <Card.Title>{show.title}</Card.Title>
                  <Card.Text>{show.description}</Card.Text>
                  <Button>{show.rate} / 100</Button>
                </Card.Body>
                <Card.Footer>{show.release_date}</Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShowsList;

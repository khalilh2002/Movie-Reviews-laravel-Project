import { Card, Container, Row, Col, Button } from "react-bootstrap";
import axios from "../Api/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetBaseUrl from "../Api/GetBaseUrl";
import "./Css/ShowList.css"; // Custom CSS file

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
      <Row className="mt-4">
        {shows.map((show, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Link to={`/Show/${show.id}`} className="text-decoration-none">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={baseUrl + show.poster_img}
                  alt={show.title}
                  className="card-img-top"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary">{show.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {show.description}
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    {show.rate} / 100
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {show.release_date}
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShowsList;

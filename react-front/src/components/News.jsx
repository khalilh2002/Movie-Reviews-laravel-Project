import Header from "./Header";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import FactoryNews from "./NewsComponents/FactoryNews";
import { Link } from "react-router-dom";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const newsData = await FactoryNews("news_all");
      console.warn(newsData);
      setNews(newsData);
    }

    fetchNews();
  }, []);

  return (
    <>
      <Header></Header>
      <Row>
        {news.map((one_news, index) => (
          <Link
            to={`/news/${one_news.id}`}
            style={{ textDecoration: "none" }}
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <Col md={10} key={index}>
              <Card className="p-2 m-2">
                <Card.Body>
                  <h5>{one_news.title}</h5>
                  <p>{one_news.content}</p>
                  {/* this link is check in if the show exist and then return title else # */}
                  <Link to={one_news.show ? `/show/${one_news.show.id}` : "#"}
                    style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <div className="d-flex">
                      <h6 className="mx-2">Tags</h6>
                      {one_news.show ? (
                        <p>
                          <Badge bg="secondary">{one_news.show.title}</Badge>
                        </p>
                      ) : (
                        <h6>None</h6>
                      )}
                    </div>
                  </Link>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-end">
                  {Date(Date.parse(one_news.updated_at))}
                </Card.Footer>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </>
  );
}

export default News;

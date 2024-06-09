import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FactoryNews from "./FactoryNews";
import Header from "../Header";
import { Container, Card, Col  , Row} from "react-bootstrap";
import GetBaseUrl from "../Api/GetBaseUrl";


function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      const newsData = await FactoryNews("news_one", id);
      setNews(newsData);
    }

    fetchNews();
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }
  const baseUrl = GetBaseUrl();
  return (
    <div>
      <Header />
      <Container className="my-4">
        <Row>
          <Col md={8}>
            <Card>
              {news.image && (
                <Card.Img
                  variant="top"
                  src={`${baseUrl}${news.image}`}
                  alt={news.title}
                />
              )}
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            {/* Add additional content or sidebar */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsPage;

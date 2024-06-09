import Header from "./Header";
import { Row, Col, Card } from "react-bootstrap";
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
      <Row >
        {news.map((one_news, index) => (
          
          <Link to={`/news/${one_news.id}`}  style={{ textDecoration: 'none' }} key={index} 
            className="d-flex justify-content-center align-items-center">

            <Col md={10} key={index}>
                <Card className="p-2 m-2">

                    <Card.Body>
                        <h5>{one_news.title}</h5>
                        <p>{one_news.content}</p>
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

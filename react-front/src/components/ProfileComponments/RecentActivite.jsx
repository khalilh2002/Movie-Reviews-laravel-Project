import { Card, Col, Image, Row } from "react-bootstrap";

function RecentActivity() {
  const items = [
    { title: "Title 1", imgSrc: "https://picsum.photos/100" },
    { title: "Title 2", imgSrc: "https://picsum.photos/100" },
    { title: "Title 3", imgSrc: "https://picsum.photos/100" },
    // Add more items as needed
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Card key={index}>
          <Row  className="mb-3">
            <Col md={1} className="text-center">
              <Image src={item.imgSrc} rounded width={30} className="m-1" />
            </Col>
            <Col md={8}>
              <p>{item.title}</p>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}

export default RecentActivity;

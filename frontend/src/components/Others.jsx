import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";

const images = [
  {
    url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/763148/pexels-photo-763148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const Others = () => {
  return (
    <Container fluid className="my-5">
      <div style={{ textAlign: "center" }}>
        <p>
          FOLLOW US ON <FaInstagram size={25} />
        </p>
        <Row>
          {images.map((image, i) => (
            <Col md={3}>
              <Image src={image.url} alt="desc" fluid />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Others;

import React, { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../actions/serviceActions";

const Services = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { services } = serviceList;

  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);
  return (
    <Container
      fluid
      className="my-5 py-5"
      style={{ textAlign: "center", backgroundColor: "aliceblue" }}
    >
      <Container>
        <h4 style={{ marginBottom: "30px" }}>
          Your Comfort Is Our #1 Priority
        </h4>
        <Row>
          {services.map((service) => (
            <Col md={3}>
              <Image
                src={service.image}
                alt={service.name}
                fluid
                style={styles.imageStyle}
              />
              <p className="my-3">{service.description}</p>
              <p>Lorem ipsum dolorsitamet, consecteturadipiscingelit,seddo</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

const styles = {
  imageStyle: {
    width: "200px",
    height: "200px",
  },
};

export default Services;

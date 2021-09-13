import React from "react";
import { Container, Image, Jumbotron } from "react-bootstrap";
import heroImage from "../assets/hero.jpeg";

const Jumbtron1 = ({ image, title }) => {
  return (
    <Container fluid>
      <Jumbotron
        style={{
          backgroundImage: `url(${heroImage})`,
          height: "500px",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          style={{
            position: "relative",
            top: "10%",
            textAlign: "center",
            fontSize: "1.3rem",
            color: "white",
          }}
        >
          Super Soft, Stylish Bed Linen
        </p>
      </Jumbotron>
    </Container>
  );
};

const styles = {
  imageStyle: {
    height: "600px",
    width: "100%",
  },
  textStyle: {
    position: "relative",
  },
};

export default Jumbtron1;

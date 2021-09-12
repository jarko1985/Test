import React from "react";
import { Container, Image } from "react-bootstrap";
import heroImage from "../assets/hero.jpeg";

const Jumbtron = ({ image, title }) => {
  return (
    <Container fluid>
      <div>
        <Image src={heroImage} fluid style={styles.imageStyle} />
      </div>
      <div style={styles.textStyle}>
        <p>Super Soft, Stylish Bed Linen</p>
        <p>Made With Love</p>
      </div>
    </Container>
  );
};

const styles = {
  imageStyle: {
    height: "600px",
    width: "100%",
  },
  textStyle: {
    position: "absolute",
    top: "120px",
    left: "45%",
    textAlign: "center",
  },
};

export default Jumbtron;

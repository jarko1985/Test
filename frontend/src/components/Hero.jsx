import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import Background from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <>
      <Container fluid>
        <Jumbotron style={styles.heroConatiner}>
          <Button>Hello World</Button>
        </Jumbotron>
      </Container>
    </>
  );
};

const styles = {
  heroConatiner: {
    backgroundImage: `url(${Background})`,
  },
};

export default Hero;

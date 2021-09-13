import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import SearchBox from "./SearchBox";

const Footer = () => {
  return (
    <footer>
      <Container className="my-5">
        <Row>
          <Col md={3} sm={6} xs={12}>
            <p style={styles.headingStyle}>OUR STORY</p>
            <p>
              Lorem ipsum dolors itamet,consectetur adipisc ingelit,seddoe
              iusmod tempor incidid untutla boreet dolorem agnaa liqua.
            </p>
            <div style={styles.iconsContainer}>
              <FaFacebook size={25} />
              <FaTwitter size={25} />
              <FaInstagram size={25} />
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div style={styles.linksContainer}>
              <p style={styles.headingStyle}>MORE...</p>
              <a>About Us</a>
              <a>Contact Us</a>
              <a>Track My Order</a>
              <a>About Us</a>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div style={styles.linksContainer}>
              <p style={styles.headingStyle}>SHOP</p>
              <a>Bed Linen</a>
              <a>Bath Towels</a>
              <a>Bath robes</a>
              <a>Home Fragrances</a>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <p style={styles.headingStyle}>NEWSLETTER</p>
            <p>
              Subsribe to receive updates, access to execlusive deals, and more.
            </p>
            <SearchBox />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const styles = {
  iconsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headingStyle: {
    fontSize: "1.2rem",
  },
};

export default Footer;

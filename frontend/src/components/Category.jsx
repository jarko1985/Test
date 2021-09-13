import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Category = ({ image, description }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Image src={image} alt="image category" fluid style={styles.imageStyle} />
      <Button style={styles.btnStyle} variant="light">
        {description}
      </Button>
    </div>
  );
};

const styles = {
  imageStyle: {
    position: "relative",
    zIndex: "1",
    width: "100%",
    height: "400px",
  },
  btnStyle: {
    color: "#000",
    position: "relative",
    border: "1px solid grey",
    borderRadius: "0px",
    marginTop: "-100px",
    zIndex: "99",
  },
};

export default Category;

import React from "react";
import { Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Category = ({ image, description }) => {
  return (
    <>
      <Image src={image} alt="image category" fluid style={styles.imageStyle} />
      <span style={styles.textStyle}>{description}</span>
    </>
  );
};

const styles = {
  imageStyle: {
    position: "relative",
    zIndex: "1",
    width: "100%",
    height: "400px",
  },
  textStyle: {
    position: "absolue",
    zIndex: "99",
    padding: "10px 5px 10px 5px",
    backgroundColor: "#FFF",
  },
};

export default Category;

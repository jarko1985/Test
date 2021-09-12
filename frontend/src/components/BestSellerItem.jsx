import React from "react";
import { Image } from "react-bootstrap";

const BestSellerItem = ({ name, description, price, image }) => {
  return (
    <>
      <Image src={image} alt="image category" fluid style={styles.imageStyle} />
      <div style={styles.textStyle}>
        <p>{name}</p>
        <p>{`AED ${price}`}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

const styles = {
  imageStyle: {
    width: "100%",
    height: "300px",
  },
  textStyle: {
    padding: "10px",
  },
};

export default BestSellerItem;

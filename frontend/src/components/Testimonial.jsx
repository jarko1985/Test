import React from "react";
import { BsStar } from "react-icons/bs";
import { Container } from "react-bootstrap";

const Testimonial = () => {
  const stars = [0, 1, 2, 3, 4];
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        {stars.map((star) => (
          <BsStar size={25} />
        ))}
        <p className="my-5" style={styles.textStyle}>
          "This is the best towelset I've ever had; it's cool, comfortable and
          aesthetically perfect."
        </p>

        <span style={styles.testimonialStyle}> READ TESTIMONIAL</span>
      </div>
    </Container>
  );
};

const styles = {
  textStyle: {
    fontSize: "1.6rem",
  },
  testimonialStyle: {
    borderBottom: "2px solid black",
    paddingBottom: "2px",
  },
};

export default Testimonial;

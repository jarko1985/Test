import React from "react";
import Jumbtron from "../components/Jumbtron";
import CategoriesSection from "../components/CategoriesSection";
import BestSellersSection from "../components/BestSellersSection";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Others from "../components/Others";
import Hero from "../components/Hero";

const LandingPageScreen = () => {
  return (
    <>
      <Jumbtron />
      <div style={styles.textStyle}>
        <p>
          Our Premium products got the finest quality cotton that create an
          exquisite lightweight textile that's both soft and crisp-guaranteed to
          give you a wonderful night sleep
        </p>
      </div>
      <CategoriesSection />
      <div style={styles.textStyle}>
        <p>Best Sellers</p>
      </div>
      <BestSellersSection />
      <Services />
      <Testimonial />
      <Hero />
      <Others />
    </>
  );
};

const styles = {
  textStyle: {
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "25px",
    fontSize: "1.7rem",
    marginLeft: "100px",
    marginRight: "100px",
  },
  bestSellersText: {},
};

export default LandingPageScreen;

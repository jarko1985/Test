import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listBestSellers } from "../actions/bestSellerActions";
import BestSellerItem from "./BestSellerItem";

const BestSellersSection = () => {
  const dispatch = useDispatch();
  const bestsellerList = useSelector((state) => state.bestsellerList);
  const { bestsellers } = bestsellerList;

  useEffect(() => {
    dispatch(listBestSellers());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {bestsellers.map((bestseller) => (
          <Col key={bestseller._id} md={4}>
            <BestSellerItem
              name={bestseller.name}
              image={bestseller.image}
              description={bestseller.description}
              price={bestseller.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellersSection;

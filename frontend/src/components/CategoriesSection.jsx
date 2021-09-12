import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/categoryActions";
import Category from "./Category";

const CategoriesSection = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          {categories.map((category) => (
            <Col key={category._id} md={6}>
              <Category
                image={category.image}
                description={category.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CategoriesSection;

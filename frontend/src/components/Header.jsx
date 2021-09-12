import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/" style={styles.space}>
                <Nav.Link>SHOP</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/" style={styles.space}>
                <Nav.Link>OUR STORY</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/" style={styles.space}>
                <Nav.Link>EXPERTISE</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <LinkContainer to="/">
            <Navbar.Brand>
              <h1>Logo</h1>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <LinkContainer to="/" style={styles.space}>
                <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/" style={styles.space}>
                <Nav.Link>
                  <BsSearch size={25} />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login" style={styles.space}>
                <Nav.Link>
                  <FiUser size={25} />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart" style={styles.space}>
                <Nav.Link>
                  <HiOutlineShoppingCart size={25} />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const styles = {
  space: {
    marginLeft: "10px",
    marginRight: "10px",
  },
};

export default Header;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import LandingPageScreen from "./screens/LandingPageScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container fluid>
            <LandingPageScreen />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// App.js
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./name";
import Description from "./description";
import Price from "./price";
import ImageProduct from "./images";
import "./App.css";
const firstName = "Mbaye";

const App = () => {
  return (
    <Container className="">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="my-5">
            <Card.Body>
              <ImageProduct />
              <Card.Title>
                <Name />
              </Card.Title>
              <Card.Text>
                <Description />
              </Card.Text>
              <Card.Text>
                <Price />
              </Card.Text>
            </Card.Body>
          </Card>
          {firstName ? (
            <>
              <p>Bonjour, {firstName}!</p>
              <img src="https://via.placeholder.com/150" alt="Profile" />
            </>
          ) : (
            <p>Bonjour, là!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;

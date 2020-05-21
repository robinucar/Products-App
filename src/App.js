import React from "react";
import Nav from "./Components/Navigation/Nav";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Nav />
        </Row>

        <Row>
          <Col xs="3">
            <Categories />
          </Col>
          <Col xs="9">
            <Products />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

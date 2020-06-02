import React from "react";
import Nav from "../Navigation/Navi";
import Categories from "../Categories/Categories";
import { Switch, Route } from "react-router-dom";
import Products from "../Products/Products";
import { Container, Row, Col } from "reactstrap";
import BasketList from "../BasketList/BasketList";
import NotFound from "../NotFound/NotFound";
import AddOrUpdateProduct from "../Products/AddOrUpdateProduct";
const App = props => {
  return (
    <div>
      <Container>
        <Nav />
        <Row>
          <Col xs="3">
            <Categories />
          </Col>
          <Col xs="9">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/basket" component={BasketList} />
              <Route
                path="/saveproduct/:productId"
                component={AddOrUpdateProduct}
              />
              <Route path="/saveproduct" component={AddOrUpdateProduct} />
              <Route component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

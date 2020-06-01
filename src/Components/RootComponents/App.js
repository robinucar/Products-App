import React, { Component } from "react";
import Nav from "../Navigation/Nav";
import Categories from "../Categories/Categories";
import { Switch, Route } from "react-router-dom";
import Products from '../Products/Products';
import { Container, Row, Col } from "reactstrap";
import BasketList from "../BasketList/BasketList";
import NotFound from "../NotFound/NotFound";
class App extends Component {

  /*removeFromBasket = (product) => {
    let newBasket = this.state.basket.filter(
      (basketItem) => basketItem.product.id !== product.id
    );
    this.setState({ basket: newBasket });
    alertify.error(product.productName + "removed from your basket...", 1.5);
  };*/

  render() {
    return (
      <div>
        <Container>
          <Nav/>

          <Row>
            <Col xs="3">
              <Categories />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Products}
                />

                <Route
                  exact
                  path="/basket"
                  component={BasketList}
                />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Nav from "./Components/Navigation/Nav";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import BasketList from "./Components/BasketList/BasketList";
import NotFound from "./Components/NotFound/NotFound";
class App extends Component {
  state = { currentCategory: "", products: [], basket: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToBasket = (product) => {
    let newBasket = this.state.basket;
    let addedItem = newBasket.find((item) => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newBasket.push({ product: product, quantity: 1 });
    }

    this.setState({ basket: newBasket });

    alertify.success(product.productName + "added to your basket...", 1.5);
  };

  removeFromBasket = (product) => {
    let newBasket = this.state.basket.filter(
      (basketItem) => basketItem.product.id !== product.id
    );
    this.setState({ basket: newBasket });
    alertify.error(product.productName + "removed from your basket...", 1.5);
  };

  render() {
    const productInfo = {
      name: "Washing Machine",
      brand: "Beko",
      model: "SX561233",
    };
    const categoryInfo = { title: "White-goods" };
    return (
      <div>
        <Container>
          <Nav
            basket={this.state.basket}
            removeFromBasket={this.removeFromBasket}
          />

          <Row>
            <Col xs="3">
              <Categories
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Products
                      {...props}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                      addToBasket={this.addToBasket}
                    />
                  )}
                />

                <Route
                  exact
                  path="/basket"
                  render={(props) => (
                    <BasketList
                      {...props}
                      basket={this.state.basket}
                      removeFromBasket={this.removeFromBasket}
                    />
                  )}
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

import React, { Component } from "react";
import Nav from "./Components/Navigation/Nav";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";

import { Container, Row, Col } from "reactstrap";
class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category)
    this.getProducts(category.id)
  };



  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
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
          <Row>
            <Nav />
          </Row>

          <Row>
            <Col xs="3">
              <Categories
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Products
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

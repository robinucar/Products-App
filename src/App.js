import React, { Component } from "react";
import Nav from "./Components/Navigation/Nav";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";

import { Container, Row, Col } from "reactstrap";
class App extends Component {
  state = {currentCategory: ''}

  changeCategory = (category) => {
    this.setState({currentCategory: category.categoryName})
  }


  render(){
    const productInfo = {name: 'Washing Machine', brand: 'Beko', model: 'SX561233'};
    const categoryInfo = {title: 'White-goods'}
    return (
      <div>
        <Container>
          <Row>
            <Nav />
          </Row>

          <Row>
            <Col xs="3">
              <Categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}  info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Products currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}




export default App;

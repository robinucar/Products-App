import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'reactstrap';

class Categories extends Component {

  state = {
    categories: []

  };

  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(data => this.setState({categories: data}))
  };



  render() {
      const itemMap = this.state.categories.map(category => (
    <ListGroupItem key={category.id} onClick={ () => this.props.changeCategory(category) }  >{category.categoryName}</ListGroupItem>
  ))
    return (
      <div>
        <ListGroup>
        {itemMap}
        </ListGroup>


      </div>
    );
  }
}

export default Categories;

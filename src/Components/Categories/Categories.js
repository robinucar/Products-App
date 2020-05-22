import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'reactstrap';

class Categories extends Component {

  state = {
    categories: [
      {categoryId: 1, categoryName: 'Beverages'},
      {categoryId: 2, categoryName: 'Condiments'}
    ]

  };




  render() {
      const itemMap = this.state.categories.map(category => (
    <ListGroupItem onClick={ () => this.props.changeCategory(category) } key={category.categoryId} >{category.categoryName}</ListGroupItem>
  ))
    return (
      <div>
        <ListGroup>
        {itemMap}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}

export default Categories;
import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'reactstrap';

class Categories extends Component {
  render() {
    return (
      <div>
        <h3>Category List</h3>
        <ListGroup>
          <ListGroupItem>1. Item</ListGroupItem>
          <ListGroupItem>2. Item</ListGroupItem>
          <ListGroupItem>3. Item</ListGroupItem>
          <ListGroupItem>4. Item</ListGroupItem>
          <ListGroupItem>5. Item</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Categories;

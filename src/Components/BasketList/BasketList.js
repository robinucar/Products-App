import React, { Component } from "react";
import { Table } from "reactstrap";

class BasketList extends Component {
  renderBasket() {
    return (
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.basket.map(basketItem => (
              <tr key={basketItem.product.id}>
                <td>{basketItem.product.id}</td>
                <td>{basketItem.product.categoryId}</td>
                <td>{basketItem.product.productName}</td>
                <td>{basketItem.product.unitPrice}</td>
                <td>{basketItem.product.unitsInStock}</td>
                <td>{basketItem.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    )
  }
  render() {
    return (
      <div>
        {this.renderBasket()}
      </div>
    );
  }
}

export default BasketList;

import React, { Component } from "react";
import { Table, Button } from "reactstrap";

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.basket.map((basketItem) => (
            <tr key={basketItem.product.id}>
              <td>{basketItem.product.id}</td>
              <td>{basketItem.product.categoryId}</td>
              <td>{basketItem.product.productName}</td>
              <td>£ {basketItem.product.unitPrice} </td>
              <td>{basketItem.product.unitsInStock}</td>
              <td>{basketItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() =>
                    this.props.removeFromBasket(basketItem.product)
                  }
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderBasket()}</div>;
  }
}

export default BasketList;

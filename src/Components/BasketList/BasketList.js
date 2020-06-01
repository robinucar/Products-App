import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from '../../Redux/actions/baskteActions';
import alertify from "alertifyjs";

class BasketList extends Component {
  removeFromBasket(product) {
    this.props.actions.removeFromBasket(product);
    alertify.error(product.productName + " removed from your basket...", 1.5);
  }
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
          {this.props.basket.map(basketItem => (
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
                    this.removeFromBasket(basketItem.product)
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

function mapStateToProps(state) {
  return {
    basket: state.basketReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromBasket: bindActionCreators(
        basketActions.removeFromBasket,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);

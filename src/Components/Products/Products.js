import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productsActions from "../../Redux/actions/productsActions";
import * as basketActions from '../../Redux/actions/baskteActions';
import alertify from "alertifyjs";

class Products extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToBasket = product => {
    this.props.actions.addToBasket({quantity: 1, product});
    alertify.success(product.productName + " added to your basket...", 1.5);
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products List</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.addToBasket(product)}
                    color="info"
                  >
                    Add to Basket
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
      addToBasket: bindActionCreators(basketActions.addToBasket, dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);

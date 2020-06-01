import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as basketActions from '../../Redux/actions/baskteActions';
import alertify from "alertifyjs";


 class BasketSummary extends Component {
   removeFromBasket(product) {
    this.props.actions.removeFromBasket(product);
    alertify.error(product.productName + " removed from your basket...", 1.5);

   }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Basket
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.basket.map((basketItem) => (
            <DropdownItem key={basketItem.product.id}>
              <Badge
                color="danger"
                onClick={() => this.removeFromBasket(basketItem.product)}
              >
                X
              </Badge>
              {basketItem.product.productName}

              <Badge color="success">{basketItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to='basket'>Go to Basket</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  emptyBasket() {
    return (
      <NavItem>
        <NavLink>Empty Basket</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        {this.props.basket.length > 0
          ? this.renderSummary()
          : this.emptyBasket()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.basketReducer
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromBasket: bindActionCreators(basketActions.removeFromBasket, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketSummary);
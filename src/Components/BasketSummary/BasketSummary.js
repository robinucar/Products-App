import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

export default class BasketSummary extends Component {
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
                onClick={() => this.props.removeFromBasket(basketItem.product)}
              >
                X
              </Badge>
              {basketItem.product.productName}

              <Badge color="success">{basketItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
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

import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from "../../Redux/actions/baskteActions";
import alertify from "alertifyjs";

const BasketSummary = props => {
  const removeFromBasket = product => {
    props.actions.removeFromBasket(product);
    alertify.error(product.productName + " removed from your basket...", 2);
  };
  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Basket
        </DropdownToggle>
        <DropdownMenu right>
          {props.basket.map((basketItem) => (
            <DropdownItem key={basketItem.product.id}>
              <Badge
                color="danger"
                onClick={() => removeFromBasket(basketItem.product)}
              >
                X
              </Badge>
              {basketItem.product.productName}

              <Badge color="success">{basketItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to="basket">Go to Basket</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  const emptyBasket = () => {
    return (
      <NavItem>
        <NavLink>Empty Basket</NavLink>
      </NavItem>
    );
  };

  return <div>{props.basket.length > 0 ? renderSummary() : emptyBasket()}</div>;
};

const mapStateToProps = (state) => {
  return {
    basket: state.basketReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      removeFromBasket: bindActionCreators(
        basketActions.removeFromBasket,
        dispatch
      ),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketSummary);

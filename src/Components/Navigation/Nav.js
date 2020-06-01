import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";
import BasketSummary from "../BasketSummary/BasketSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Northwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <BasketSummary
              basket = {props.basket}
              removeFromBasket = {props.removeFromBasket}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;

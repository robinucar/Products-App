import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import BasketSummary from "../BasketSummary/BasketSummary";

const Navi = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen({
      isOpen: !isOpen,
    });
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">Northwind Online Shopping</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/saveproduct">Add Product</Link>
              </NavLink>
            </NavItem>
            <BasketSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;

import React from "react";
import Navi from "../Navigation/Navi";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Dashboard from './Dashboard';
import BasketList from "../BasketList/BasketList";
import NotFound from "../NotFound/NotFound";
import AddOrUpdateProduct from "../Products/AddOrUpdateProduct";

const App = (props) => {
  return (

      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product"  component={Dashboard} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route path="/basket"  component={BasketList} />
          <Route component={NotFound} />
        </Switch>

      </Container>
    );
};

export default App;

import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../Redux/actions/categoryActions";
import * as productsActions from "../../Redux/actions/productsActions";

class Categories extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  getCategories = category => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  };

  render() {
    const itemMap = this.props.categories.map((category) => (
      <ListGroupItem
        active={category.id === this.props.currentCategory.id ? true : false}
        key={category.id}
        onClick={() => this.getCategories(category)}
      >
        {category.categoryName}
      </ListGroupItem>
    ));
    return (
      <div>
        <h3>
          <Badge color="warning">Categories</Badge>
        </h3>
        <ListGroup>{itemMap}</ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

const  mapDispatchToProps = dispatch => {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

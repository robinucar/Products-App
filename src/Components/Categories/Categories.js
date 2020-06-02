import React, { useEffect } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../Redux/actions/categoryActions";
import * as productsActions from "../../Redux/actions/productsActions";

const Categories = props => {
  useEffect(() => {
    props.actions.getCategories();
  }, []);

  const getCategories = category => {
    props.actions.changeCategory(category);
    props.actions.getProducts(category.id);
  };

  const itemMap = props.categories.map(category => (
    <ListGroupItem
      active={category.id === props.currentCategory.id ? true : false}
      key={category.id}
      onClick={() => getCategories(category)}
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
};

const mapStateToProps = state => {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
};

const mapDispatchToProps = dispatch => {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

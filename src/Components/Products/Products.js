import React, { Component } from 'react'

class Products extends Component {
  render() {
    return (
      <div>
          <h3>Product List - {this.props.currentCategory}</h3>
      </div>
    )
  }
}

export default Products;
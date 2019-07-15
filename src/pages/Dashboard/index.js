import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/cart'
import DashboardContainer from '../../containers/Dashboard'

import products from '../../components/Product/product'

class Dashboard extends Component {

  handleOnAddToCart = (product) => {
    this.props.onAddToCart(product)
  }

  handleClickCart = () => {
    this.props.history.push('/order')
  }

  render () {
    return (
      <DashboardContainer
        products={products}
        onAddToCart={this.handleOnAddToCart}
        onCartDetails={this.handleClickCart}
        items={this.props.items}
      />
    )
  }
}

const mapStateToProps = ({ cart }) => ({
  items: cart
})

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: product => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
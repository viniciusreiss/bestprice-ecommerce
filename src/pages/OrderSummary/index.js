import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanCart, removeItem } from '../../redux/actions/cart'
import OrderSummaryContainer from '../../containers/OrderSummary'

class OrderSummary extends Component {
  handleOnCleanCart = () => {
    this.props.onCleanCart()
  }

  handleOnRemoveItem = (product) => {
    this.props.onRemoveItem(product)
  }

  render () {
    return (
      <OrderSummaryContainer
        items={this.props.cart}
        onCleanCart={this.handleOnCleanCart}
        onRemoveItem={this.handleOnRemoveItem}
      />
    )
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
})

const mapDispatchToProps = dispatch => {
  return {
    onCleanCart: () => dispatch(cleanCart()),

    onRemoveItem: product => dispatch(removeItem(product))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)
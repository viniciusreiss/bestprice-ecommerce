import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanCart, removeItem } from '../../redux/actions/cart'
import OrderSummaryContainer from '../../containers/OrderSummary'
import { generateBoleto } from '../../service/boleto'

class OrderSummary extends Component {
  state = {
    loading: false,
  }

  handleOnCleanCart = () => {
    this.props.onCleanCart()
  }

  handleOnRemoveItem = (product) => {
    this.props.onRemoveItem(product)
  }

  handleSubmitBoleto = async (values) => {
    const { cart: { cart } } = this.props

    this.setState({ loading: true }, async () => {

    const sumItems = cart.map(item => item.price * item.quantity)
    const amount = sumItems.reduce((acc, cur) => acc + cur, 0)

      try {
        const body = {
          amount: amount * 100,
          api_key: 'ak_test_c95d1oaP2zxURZiTM3nhELxdHFSSuo',
          payment_method: 'boleto',
          capture: 'true',
          customer: {
            type: 'individual',
            country: 'br',
            name: values.name,
            documents: [{
              type: 'cpf',
              number: values.cpf
            }]
          }
        }
        const response = await generateBoleto(body)
        this.setState({ loading: false })
        this.props.history.push('/finish', { state: { response } })
      } catch (err) {
        console.log(err)
      }
    })
  }

  render () {
    return (
      <OrderSummaryContainer
        items={this.props.cart}
        onCleanCart={this.handleOnCleanCart}
        onRemoveItem={this.handleOnRemoveItem}
        onSubmitBoleto={this.handleSubmitBoleto}
        loading={this.state.loading}
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
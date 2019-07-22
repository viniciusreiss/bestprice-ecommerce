import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanCart, removeItem } from '../../redux/actions/cart'
import { generateBoleto } from '../../service/boleto'
import { payment, generateCardHash } from '../../service/creditCard'
import { sumItemsCart } from '../../utils/cart'
import { message } from 'antd'
import { API_KEY } from '../../utils/keys'
import OrderSummaryContainer from '../../containers/OrderSummary'

class OrderSummary extends Component {
  state = {
    loadingBoleto: false,
    loadingCreditCard: false,
  }

  handleOnCleanCart = () => {
    this.props.onCleanCart()
  }

  handleOnRemoveItem = (product) => {
    this.props.onRemoveItem(product)
  }

  handleSubmitBoleto = async (values) => {
    const { cart: { cart } } = this.props

    const amount = sumItemsCart(cart)

    const body = {
      amount,
      api_key: API_KEY,
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

    this.setState({ loadingBoleto: true }, async () => {
      try {
        const response = await generateBoleto(body)

        this.setState({ loadingBoleto: false })

        this.props.history.push('/finish', { state: { response } })

      } catch (err) {
        this.setState({ loadingBoleto: false })

        message.error('Erro ao gerar boleto!')
      }
    })
  }

  handleSubmitCreditCard = async (values) => {
    const { cart: { cart } } = this.props

    const { card_number, card_holder_name, card_expiration_date, card_cvv } = values

    const card = { card_number, card_holder_name, card_expiration_date, card_cvv, }

    const card_hash = await generateCardHash(card)

    const amount = sumItemsCart(cart)

    const items = cart.map((item) => {
      return {
        id: item.productId.toString().replace(/\.|-/g, ''),
        title: item.productName,
        unit_price: item.price.toString().replace(/\.|-/g, ''),
        quantity: item.quantity,
        tangible: true
      }
    })

    const body = {
    api_key: API_KEY,
    amount,
    card_hash,
    installments: values.installments,
    customer: {
      external_id: "#3311",
      name: values.name,
      type: "individual",
      country: "br",
      email: "mopheus@nabucodonozor.com",
      documents: [
        {
          type: "cpf",
          number: values.cpf
        }
      ],
      phone_numbers: ["+5511999998888", "+5511888889999"],
      birthday: "1965-01-01"
    },
    billing: {
      name: values.name,
      address: {
        country: "br",
        state: values.state,
        city: values.city,
        neighborhood: values.neighborhood,
        street: values.street,
        street_number: values.number,
        zipcode: values.zipCode
      }
    },
    items: items
    }

    this.setState({ loadingCreditCard: true }, async () => {

      try {
        const response = await payment(body)

        this.props.history.push('/finish', { state: { response } })

        this.setState({ loadingCreditCard: false })

      } catch (err) {
        message.error('Transaçāo nāo autorizada!')
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
        onSubmitCreditCard={this.handleSubmitCreditCard}
        loadingBoleto={this.state.loadingBoleto}
        loadingCreditCard={this.state.loadingCreditCard}
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
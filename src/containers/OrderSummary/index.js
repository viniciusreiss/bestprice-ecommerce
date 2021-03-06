import React, { Component, Fragment } from 'react'
import { formatPrice } from '../../utils/formatters'
import { Icon } from 'antd'
import style from './style.module.css'

import CheckoutContainer from '../Checkout'
class OrderSummary extends Component {
  render () {
    const { items } = this.props
    const sumItems = items.cart.map(item => item.price * item.quantity)
    const total = sumItems.reduce((acc, cur) => acc + cur, 0)

    return (
    <Fragment>
    <header className={style.header}>
       <h1 className={style.logo}>BestPrice</h1>
    </header>
     <div className={style.wrapper}>
       <div className={style.containerBg}>
       <div className={style.containerTitle}>
        <h2>Resumo do pedido</h2>
        <div
          className={style.wrapperTrashIcon}
          onClick={this.props.onCleanCart}
        >
          <Icon type="delete" />
          <p className={style.textContainerTitle}>Limpar carrinho</p>
        </div>
       </div>
       {items.cart.length >= 1 ? items.cart.map(item => {
         return (
          <div
            key={item.productId}
            className={style.containerProduct}>
            <div
              className={style.wrapperTrashItem}
              onClick={() => this.props.onRemoveItem({ id: item.productId, quantity: item.quantity})}
            >
              <Icon type="delete" />
              <p className={style.textWrapperTashItem}>remover</p>
            </div>
            <img src={item.photo} className={style.photo} alt={item.productName} />
            <div className={style.containerProductInfo}>
              <div>
                <p className={style.name}>{item.productName}</p>
                <p className={style.name}>quantidade: {item.quantity}</p>
              </div>
              <p>{formatPrice(item.price * item.quantity)}</p>
            </div>
          </div>
         )
       }) : <p> Você nāo possui nenhum produto no carrinho :( </p> }
       <hr />
       <div className={style.containerPrice}>
         <p>Total</p>
         {formatPrice(total)}
       </div>
       </div>
       <div className={style.containerPayment}>
         <h2>Pagamento</h2>
          { items.cart.length >= 1 ?
            <CheckoutContainer
              onSubmitCreditCard={this.props.onSubmitCreditCard}
              onSubmitBoleto={this.props.onSubmitBoleto}
              loadingBoleto={this.props.loadingBoleto}
              loadingCreditCard={this.props.loadingCreditCard}
            /> : ' Você nāo possui nenhum produto no carrinho :(' }
       </div>
     </div>
    </Fragment>
    )
  }
}

export default OrderSummary
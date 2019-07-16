import React, { Component } from 'react'
import Product from '../../components/Product'
import { Icon } from 'antd'
import style from './style.module.css'
export default class Dashboard extends Component {
  render () {
    const {
      showModal,
      closeModal,
      visible,
      onAddToCart,
      items
    } = this.props

    const cartItems = items.cart.map(item => item.quantity)

    return (
      <div className={style.wrapper}>
        <header className={style.header}>
          <h1 className={style.logo}>BestPrice</h1>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={this.props.onCartDetails}
        >
          <Icon type="shopping-cart" style={{ fontSize: '28px' }} />
           {cartItems.reduce((acc, cur) => acc + cur, 0)}
        </div>
        </header>
        <section className={style.containerBg}>
          <div className={style.containerProducts}>
            {this.props.products.map(product => {
              return (
                <Product
                key={product.productId}
                data={product}
                name={product.productName}
                photo={product.photo}
                price={product.price}
                showModal={showModal}
                closeModal={closeModal}
                visible={visible}
                onAddToCart={onAddToCart}
                />
                )
            })}
          </div>
        </section>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Product from '../../components/Product'
import style from './style.module.css'

export default class Dashboard extends Component {
  render () {
    return (
      <div className={style.wrapper}>
        <header className={style.header}>
        BestPrice
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
                />
                )
            })}
          </div>
        </section>
      </div>
    )
  }
}
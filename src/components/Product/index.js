import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

class Product extends Component {
  formatPrice = (price) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  render () {
    return (
      <div className={style.wrapper}>
        <div className={style.containerBg}>
          <img
            src={this.props.photo}
            alt="produto"
            className={style.image}
          />
          <p className={style.name}>{this.props.name}</p>
          <p className={style.price}>{this.formatPrice(this.props.price)}</p>
        </div>
      </div>

    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.any.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product
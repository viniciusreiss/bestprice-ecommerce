import React, { Component } from 'react'
import { formatPrice } from '../../utils/formatters'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import style from './style.module.css'

import ProductDetails from './ProductDetails'
class Product extends Component {
  state = {
    visible: false
  }

  showModal = () => this.setState({ visible: true })

  render () {
    return (
    <div>
      <div className={style.wrapper} onClick={this.showModal}>
        <div className={style.containerBg}>
          <img
            src={this.props.photo}
            alt="produto"
            className={style.image}
          />
          <p className={style.name}>{this.props.name}</p>
          <p className={style.price}>{formatPrice(this.props.price)}</p>
        </div>
      </div>
      <ProductDetails
        visible={this.state.visible}
        product={this.props.data}
      />
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
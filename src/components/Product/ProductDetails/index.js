import React, { Component } from 'react'
import { formatPrice } from '../../../utils/formatters'
import { Modal, Button } from 'antd'
import style from './style.module.css'

class ProductDetails extends Component {

  render () {
    const { product } = this.props
    return (
      <Modal
        visible={this.props.visible}
        onCancel={this.props.onCloseModal}
        footer={null}
      >
        <div className={style.wrapper}>
          <img
          src={product.photo}
          alt={product.name}
          className={style.image}
          />
          <div className={style.container}>
            <p className={style.name} >{product.productName}</p>
            <p className={style.price}>{formatPrice(product.price)}</p>
            <Button
            type="primary"
            onClick={() => this.props.onAddToCart(product)}
            >
            Adicionar ao carrinho
            </Button>
            <p className={style.description}>{product.description}</p>
          </div>
        </div>
      </Modal>
    )
  }
}

export default ProductDetails
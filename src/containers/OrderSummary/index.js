import React, { Component } from 'react'
import { formatPrice } from '../../utils/formatters'
import { Icon } from 'antd'
import style from './style.module.css'

class OrderSummary extends Component {
  render () {
    const { items } = this.props

    return (
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
       {items.cart.map(item => {
         return (
          <div key={item.productId} style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'center' }}>
            <div
              style={{ height: '100px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', flexDirection: 'column' }}
              onClick={() => this.props.onRemoveItem(item.productId)}
            >
              <Icon type="delete" />
              <p style={{ margin: 0, fontSize: 8 }}>remover</p>
            </div>
            <img src={item.photo} style={{ width: 50, height: 50 }} alt={item.productName} />
            <div style={{ marginLeft: 20, width: '100%', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
              <p style={{ margin: 0 }}>{item.productName}</p>
              <p>{formatPrice(item.price)}</p>
            </div>
          </div>
         )
       })}
       <hr />
       <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
         <p>Total</p>
          {items.cart.length > 1 ? formatPrice(items.cart.reduce((acc, cur) => acc.price + cur.price))
             : formatPrice(items.cart.map(item => item.price))}
       </div>
       </div>
       <div style={{ backgroundColor: '#eee', flex: 1, padding: 24 }}>
         <h2>Pagamento</h2>
       </div>
     </div>
    )
  }
}

export default OrderSummary
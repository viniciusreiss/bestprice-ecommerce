import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react'

import Product from '../Product'
import products from './product'

storiesOf('Product', module)
  .add('List of products', () => (
    <Fragment>
      {products.map(product => {
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
    </Fragment>
  ))
  .add('Product', () => (
    <Product
      name="Protetor Solar"
      photo={require('../../img/product_4.png')}
      price={99}
    />
  ))
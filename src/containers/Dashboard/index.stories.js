import React from 'react';
import { storiesOf } from '@storybook/react'

import Dashboard from '../Dashboard'
import products from '../../components/Product/product'

storiesOf('Dashboard', module)

  .add('dashboard', () => (
    <Dashboard
      products={products}
    />
  ))
import React from 'react'
import { storiesOf } from '@storybook/react'

import CrediCardForm from './CreditCardForm'
import BoletoForm from './BoletoForm'
import Checkout from '.'

storiesOf('Checkout', module)
  .add('Credit Card Form', () => (
    <CrediCardForm />
  ))

  .add('Boleto Form', () => (
    <BoletoForm />
  ))

  .add('Checkout', () => (
    <Checkout />
  ))
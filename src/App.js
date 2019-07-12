import React, { Component } from 'react'
import Dashboard from './containers/Dashboard'
import products from './components/Product/product'
class App extends Component {

  render () {
    return (
      <Dashboard
        products={products}
      />
    )
  }
}

export default App

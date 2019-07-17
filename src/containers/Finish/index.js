import React, { Component } from 'react'
import Barcode from 'react-barcode'

class Finish extends Component {
  render () {
    const { data } = this.props
    return (
      <div style={{ display: 'flex', flex: 1, height: '100vh' }}>
       <Barcode value={data.boleto_barcode} />
      </div>
    )
  }
}

export default Finish
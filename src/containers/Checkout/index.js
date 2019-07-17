import React, { Component } from 'react'
import { Tabs, Icon } from 'antd'
import BoletoForm from './BoletoForm'

const { TabPane } = Tabs

class Checkout extends Component {
  render () {
    return (
      <div>
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
                <Icon type="credit-card" />
                Cartāo de Crédito
              </span>
            }
            key="1"
          >
            Tab 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="barcode" />
                Boleto
              </span>
            }
            key="2"
          >
           <BoletoForm
            onSubmitBoleto={this.props.onSubmitBoleto}
            loading={this.props.loading}
           />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Checkout
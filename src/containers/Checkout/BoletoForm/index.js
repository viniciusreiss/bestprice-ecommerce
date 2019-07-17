import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

class Boleto extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
     this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.onSubmitBoleto(values)
      }
    })
  }

  render () {
  const { getFieldDecorator } = this.props.form
    return (
      <div style={{ padding: 24 }}>
      <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Preencha o campo nome!' }],
            })(
              <Input
                placeholder="Nome"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('cpf', {
              rules: [{ required: true, message: 'Preencha o campo CPF!' }],
            })(
              <Input
                placeholder="CPF"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button
              onClick={this.handleSubmit}
              loading={this.props.loading}
            >
              Gerar boleto
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Boleto)
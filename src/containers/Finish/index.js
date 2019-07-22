import React, { Component } from 'react'
import Barcode from 'react-barcode'
import moment from 'moment'
import { formatReal } from '../../utils/formatters'
import { Icon, Button } from 'antd'
import style from './style.module.css'

class Finish extends Component {

  renderInternalError = () => {
    return (
      <div className={style.containerError}>
        <Icon type="close-circle" style={{ fontSize: 42, color: 'red' }} />
        <h1 style={{ marginLeft: 5 }}>Erro interno, tente novamente mais tarde!</h1>
      </div>
    )
  }

  render () {
    const { data: { response } } = this.props

    const total = formatReal(response.amount)
    const formattedTotal = total.replace(/,/gi, ".")
    const plotValue = formattedTotal / response.installments

    return (
      <div>
        <header className={style.header}>
          <h1 className={style.logo}>BestPrice</h1>
        </header>
        {response.errors ? this.renderInternalError() :
        <div className={style.wrapper}>
          <div className={style.containerBg}>
            <div className={style.containerSucess}>
              <div className={style.wrapperIcon}>
                <h2>Sucesso!</h2>
                <Icon type="check-circle" style={{ fontSize: 32, color: '#008322' }} />
              </div>
            </div>
            <h3>Dados do pagamento</h3>
            <div className={style.containerInfo}>
              <p className={style.label}>Nome</p>
              <span>{response.customer.name}</span>
            </div>

            <div className={style.containerInfo}>
              <p className={style.label}>CPF</p>
              {response.customer.documents.map(doc => <p key={doc.number}>{doc.number}</p> )}
            </div>
            <div className={style.containerInfo}>
              <p className={style.label}>{response.boleto_barcode ? 'Linha digitável' : 'Parcelas'}</p>
              <p>{response.boleto_barcode || `${response.installments}x`}</p>
            </div>

            {response.boleto_barcode ?
              <div className={style.containerInfo}>
                <p className={style.label}>Vencimento</p>
                <p>{moment(response.boleto_expiration_date).format('DD/MM/YYYY')}</p>
              </div> :

              <div className={style.containerInfo}>
                <p className={style.label}>Valor das parcelas</p>
                <p>R${plotValue.toFixed(2)}</p>
              </div>
            }

            <div className={style.containerInfo}>
              <p className={style.label}>Valor</p>
              <p>R${formatReal(response.amount)}</p>
            </div>

            <div className={style.containerBarcode}>
              {response.boleto_barcode ? <Barcode value={response.boleto_barcode} /> : null }
            </div>
          </div>
            <Button
              style={{ marginTop: 25 }}
              onClick={this.props.onGoToStore}
            >
              Voltar para loja
            </Button>
        </div>
        }
      </div>
    )
  }
}

export default Finish
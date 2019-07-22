import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { cleanCart } from '../../redux/actions/cart'

import FinishContainer from '../../containers/Finish'

class Finish extends Component {

  state = {
    response: ''
  }

  componentDidMount () {
    const { state } = this.props.history.location.state
    this.getResponse(state)
  }

  getResponse = (value) => {
    this.setState({ response: value })
  }

  onGoToStore = () => {
    this.props.history.push('/')
    this.props.onCleanCart()
  }

  render () {
    return (
      <Fragment>
        {this.state.response &&
           <FinishContainer
            data={this.state.response}
            onGoToStore={this.onGoToStore}
          />
        }
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCleanCart: () => dispatch(cleanCart()),
  }
}
export default connect(null, mapDispatchToProps)(Finish)
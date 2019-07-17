import React, { Component, Fragment } from 'react'

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

  render () {
    console.log(this.state.response)
    return (
      <Fragment>
        {this.state.response &&
           <FinishContainer
            data={this.state.response}
          />
        }
      </Fragment>
    )
  }
}

export default Finish
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import OrderSummary from './OrderSummary'
import Finish from './Finish'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/order" component={OrderSummary} />
      <Route path="/finish" component={Finish} />
    </Switch>
  </BrowserRouter>
)

export default Routes
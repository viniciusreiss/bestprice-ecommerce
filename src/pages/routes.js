import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import OrderSummary from './OrderSummary'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/order" component={OrderSummary} />
    </Switch>
  </BrowserRouter>
)

export default Routes
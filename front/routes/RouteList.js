import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Home from 'containers/Home'
import Forus from 'containers/Forus'
import Products from 'containers/Products'
import Product from 'containers/Product'
import Service from 'containers/Service'
import Services from 'containers/Services'
import Catalogs from 'containers/Catalogs'
import NotFound from 'containers/NotFound'

class RouteList extends Component {
  render () {
    return (
      <Switch>
        <Route key='/' exact path='/' component={Home} />
        <Route key='/products' exact path='/products' component={Products} />
        <Route key='/products/:category' exact path='/products/:category' component={Products} />
        <Route key='/product/:name/:id' path='/product/:name/:id' component={Product} />
        <Route key='/services' exact path='/services' component={Services} />
        <Route key='/service/:name' exact path='/service/:name' component={Service} />
        <Route key='/catalogs' exact path='/catalogs' component={Catalogs} />
        <Route key='/for-us' exact path='/for-us' component={Forus} />
        <Route key='/*' component={NotFound} />
      </Switch>
    )
  }
}

export default RouteList

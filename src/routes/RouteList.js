import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from 'containers/Home'
import Forus from 'containers/Forus'
import Products from 'containers/Products'
import Product from 'containers/Product'
import Services from 'containers/Services'
import Catalogs from 'containers/Catalogs'

class RouteList extends Component {
  render () {
    return [
      <Route key='/' exact path='/' component={Home} />,
      <Route key='/products' exact path='/products' component={Products} />,
      <Route key='/product/:name/:id' path='/product/:name/:id' component={Product} />,
      <Route key='/services' exact path='/services' component={Services} />,
      <Route key='/catalogs' exact path='/catalogs' component={Catalogs} />,
      <Route key='/for-us' exact path='/for-us' component={Forus} />
    ]
  }
}

export default RouteList

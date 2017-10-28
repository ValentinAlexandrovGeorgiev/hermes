import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from 'containers/Home'
import Test from 'containers/Test'

class RouteList extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
      </div>
    )
  }
}

export default RouteList

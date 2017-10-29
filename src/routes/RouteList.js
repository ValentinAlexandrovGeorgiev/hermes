import React, { Component } from 'react'
import { Route } from 'react-router'
import Home from 'containers/Home'

class RouteList extends Component {
  render () {
    return [
      <Route key='/' exact path='/' component={Home} />
    ]
  }
}

export default RouteList

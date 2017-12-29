import React, { Component } from 'react'

import RouteList from './RouteList'

class RouteRoot extends Component {
  render () {
    return (
      <RouteList {...this.props} />
    )
  }
}

export default RouteRoot

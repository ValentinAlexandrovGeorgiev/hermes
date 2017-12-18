import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class MetaTags extends Component {
  render () {
    const {
      location,
      title
    } = this.props

    return (
      <Helmet>
        <title>{ title }</title>
        <link rel='canonical' href={location} />
      </Helmet>
    )
  }
}

export default MetaTags

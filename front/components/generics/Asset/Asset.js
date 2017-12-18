import React, { Component } from 'react'

class Asset extends Component {
  renderTitle (title) {
    if (!title) {
      return null
    }

    return (
      <h4>{title}</h4>
    )
  }

  renderBody (body) {
    if (!body) {
      return null
    }
    
    return (
      <div dangerouslySetInnerHTML={{__html: body}} />
    )
  }

  render () {
    const {
      asset
    } = this.props

    if (!asset) {
      return null
    }

    return (
      <div className={`asset__wrapper ${asset.asset_id}`}>
        {this.renderTitle(asset.title)}
        {this.renderBody(asset.body)}
      </div>
    )
  }
}

export default Asset

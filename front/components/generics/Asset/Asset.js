import React, { Component } from 'react'
import { connect } from 'react-redux'
import { langProperty } from 'translations'

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
      lang,
      asset
    } = this.props

    if (!asset) {
      return null
    }

    const body = asset[langProperty('body', lang)]
    const title = asset[langProperty('title', lang)]
    return (
      <div className={`asset__wrapper ${asset.asset_id}`}>
        {this.renderTitle(title)}
        {this.renderBody(body)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    lang: state.language.lang
  }
  return props
}

export default connect(mapStateToProps)(Asset)

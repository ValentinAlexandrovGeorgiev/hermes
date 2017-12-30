import React, { Component } from 'react'
import { langProperty } from 'translations'
import PropTypes from 'prop-types'
import './servicetile.scss'

class ServiceTile extends Component {
  render () {
    const {
      image_link
    } = this.props.service

    const body = this.props.service[langProperty('body', this.props.lang)]
    const title = this.props.service[langProperty('title', this.props.lang)]

    return (
      <div className='service-tile__wrapper'>
        <div className='service-tile__container'>
          <img src={image_link} alt={title} />
          <div className='service-tile__description'>
            <h3>{title}</h3>
            {
              body
              ? <div dangerouslySetInnerHTML={{__html: `${body.substring(0, 70)}...`}} />
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}

ServiceTile.defaultProps = {
  service: {
    body: '',
    image_link: '',
    title: ''
  }
}

ServiceTile.propTypes = {
  service: PropTypes.shape({
    body: PropTypes.string,
    image_link: PropTypes.string,
    title: PropTypes.string
  })
}

export default ServiceTile

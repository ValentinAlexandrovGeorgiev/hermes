import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './servicetile.scss'

class ServiceTile extends Component {
  render () {
    const {
      image_link,
      body,
      title
    } = this.props.service

    return (
      <div className='service-tile__wrapper'>
        <img src={image_link} alt={title} />
        <div className='service-tile__description'>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{__html: body.substring(0, 70)}} />
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

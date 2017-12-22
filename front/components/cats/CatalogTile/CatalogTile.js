import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './catalogtile.scss'

class CatalogTile extends Component {
  render () {
    const {
      pdf,
      image_link,
      name
    } = this.props.catalog

    return (
      <div className='catalog-tile__wrapper'>
        <a href={pdf}>
          <img src={image_link} alt={name} />
          <span>{name}</span>
        </a>
      </div>
    )
  }
}

CatalogTile.defaultProps = {
  catalog: {}
}

CatalogTile.propTypes = {
  catalog: PropTypes.shape({})
}

export default CatalogTile

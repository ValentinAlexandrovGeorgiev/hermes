import React, {Component} from 'react'
import { langProperty } from 'translations'
import PropTypes from 'prop-types'
import './catalogtile.scss'

class CatalogTile extends Component {
  render () {
    const {
      pdf,
      image_link
    } = this.props.catalog

    const name = this.props.catalog[langProperty('name', this.props.lang)]

    return (
      <div className='catalog-tile__wrapper col col-xs-50 col-md-33 col-lg-25'>
        <a className='catalog-tile__link' href={pdf} target='_blank'>
          <img className='catalog-tile__image' src={image_link} alt={name} />
          <span className='catalog-tile__name'>{name}</span>
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

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CatalogTile from '../CatalogTile/CatalogTile'
import './cataloggrid.scss'

class CatalogGrid extends Component {
  renderChildren () {
  	const {
  	  catalogs
  	} = this.props

  	return catalogs.map((cat) => {
  	  return <CatalogTile key={cat.catalog_id} catalog={cat} />
  	})
  }

  render () {
    return [
      <div key='1' className='col col-xs-100 col-lg-70'>
        {this.renderChildren()}
      </div>,
      <div key='2' className='col col-lg-30'>
      	Best Products
      </div>
    ]
  }
}

CatalogGrid.defaultProps = {
  catalogs: []
}

CatalogGrid.propTypes = {
  catalogs: PropTypes.array
}

export default CatalogGrid

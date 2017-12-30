import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CatalogTile from '../CatalogTile/CatalogTile'
import './cataloggrid.scss'

class CatalogGrid extends Component {
  renderChildren () {
  	const {
  	  catalogs,
      lang
  	} = this.props

  	return catalogs.map((cat) => {
  	  return <CatalogTile key={cat.catalog_id} catalog={cat} lang={lang} />
  	})
  }

  render () {
    return (
      <div className='col col-xs-100'>
        {this.renderChildren()}
      </div>
    )
  }
}

CatalogGrid.defaultProps = {
  catalogs: []
}

CatalogGrid.propTypes = {
  catalogs: PropTypes.array
}

export default CatalogGrid

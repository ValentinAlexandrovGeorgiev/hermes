import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import { translate } from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import ProductList from 'components/plp/ProductList/ProductList'
import Sorting from 'components/plp/Sorting/Sorting'
import ProductTile from 'components/plp/ProductTile/ProductTile'
import Pagination from 'components/plp/Pagination/Pagination'

import 'styles/pages/search.scss'

class Search extends Component {
  componentWillMount () {
    const {
      actions,
      location
    } = this.props

    const params = new URLSearchParams(location.search)
    const query = params.get('q') || ''
    let page = params.get('page') || 1
    page = parseInt(page)
    const start = page <= 1 ? 0 : (page - 1) * 12  

    actions.search(query, start, 12)
  }

  componentWillReceiveProps (nextProps) {
    const newLocation = nextProps.location
    const location = this.props.location
    const actions = this.props.actions
    
    const newParams = new URLSearchParams(newLocation.search)
    const params = new URLSearchParams(location.search)

    const newQuery = newParams.get('q') || ''
    const query = params.get('q') || ''

    let newPage = newParams.get('page') || 1
    let page = params.get('page') || 1

    newPage = parseInt(newPage)
    page = parseInt(page)

    if (query !== newQuery) {
      const start = newPage <= 1 ? 0 : (newPage - 1) * 12  
      actions.search(newQuery, start, 12)
    }
  }

  render () {
    const {
      products,
      count,
      pages,
      location
    } = this.props

    const params = new URLSearchParams(location.search)
    const query = params.get('q') || ''
    const page = params.get('page') || 1

    const meta = {
      title: `${translate('project.name')} - ${translate('meta.products')}`,
      location: window.location.href,
      index: true,
      keywords: translate('project.keywords'),
      description: `${translate('project.description')} - ${translate('meta.products.description')}`
    }
    
    const hasPagination = pages > 1
    return (
      <div>
        <MetaTags {...meta} />
        <Header />
        <div className='col col-xs-100'>
          <div className='col col-xs-100 col-md-70'>
            <h1 className='search-label'>{translate('search.label', query)} <span>({count || 0})</span></h1>
          </div>
          <div className='col col-xs-100 col-md-30'>
            <Sorting />
          </div>
        </div>
        <Pagination query={query} pagination={hasPagination} pages={pages} currentPage={page}>
          <div className="product_list__wrapper">
            {this.renderProducts()}
          </div>
        </Pagination>
        <Footer />
      </div>
    )
  }

  renderProducts() {
    const {
      products
    } = this.props

    return products.map((product, index) => {
      return (
        <div key={`${product.name}_${index}`} className="col col-xs-100 col-md-50 col-lg-33 col-big-25">
          <ProductTile {...product} />
        </div>
      )
    })
  }
}

Search.defaultProps = {
  products: [],
  count: 0,
  pages: 0
}

Search.propTypes = {
  products: PropTypes.array,
  count: PropTypes.number,
  pages: PropTypes.number
}

const mapStateToProps = (state) => {
  const props = {
    products: state.product_information.products,
    pages: state.product_information.pages,
    count: state.product_information.count
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

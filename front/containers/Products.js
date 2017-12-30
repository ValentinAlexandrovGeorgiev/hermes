import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import { translate } from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import Categories from 'components/generics/Categories/Categories'
import ProductList from 'components/plp/ProductList/ProductList'
import Breadcrumbs from 'components/plp/Breadcrumbs/Breadcrumbs'
import Sorting from 'components/plp/Sorting/Sorting'
import Pagination from 'components/plp/Pagination/Pagination'

class Products extends Component {

  render () {
    const { 
      categories,
      childCategories,
      products,
      count,
      pages,
      breadcrumbs,
      match,
      location
    } = this.props

    const params = new URLSearchParams(location.search)
    const page = params.get('page') || 1
    const ordering = params.get('ordering') || undefined

    const selectedCategory = match.params.category || null

    const metaTitle = selectedCategory || translate('meta.products')
    const meta = {
      title: `${translate('project.name')} - ${metaTitle}`,
      location: window.location.href,
      index: true,
      keywords: `${translate('project.keywords')},${selectedCategory}`,
      description: `${translate('project.description')} - ${selectedCategory} - ${translate('meta.products.description')}`
    }
    
    const hasPagination = pages > 1
    return (
      <div>
        <MetaTags {...meta} />
        <Header />
        <Categories categories={categories} childCategories={childCategories} selectedCategory={selectedCategory} />
        <div className='col col-xs-100'>
          <div className='col col-xs-100 col-md-70'>
            <Breadcrumbs breadcrumbs={[selectedCategory]} count={count} />
          </div>
          <div className='col col-xs-100 col-md-30'>
            <Sorting category={selectedCategory} />
          </div>
        </div>
        <Pagination category={selectedCategory} pagination={hasPagination} ordering={ordering} pages={pages} currentPage={page}>
          <ProductList category={selectedCategory} currentPage={page} ordering={ordering} />
        </Pagination>
        <Footer />
      </div>
    )
  }
}

Products.defaultProps = {
  products: [],
  breadcrumbs: [],
  count: 0,
  pages: 0
}

Products.propTypes = {
  products: PropTypes.array,
  breadcrumbs: PropTypes.array,
  count: PropTypes.number,
  pages: PropTypes.number
}

const mapStateToProps = (state) => {
  const props = {
    categories: state.catalog_information.categories,
    childCategories: state.catalog_information.childCategories,
    products: state.product_information.products,
    pages: state.product_information.pages,
    count: state.product_information.count,
    breadcrumbs: state.breadcrumbs_information.breadcrumbs
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

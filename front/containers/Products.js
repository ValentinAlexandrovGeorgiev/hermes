import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import translate from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import Categories from 'components/generics/Categories/Categories'
import ProductList from 'components/plp/ProductList/ProductList'
import Breadcrumbs from 'components/plp/Breadcrumbs/Breadcrumbs'
import Sorting from 'components/plp/Sorting/Sorting'

class Products extends Component {
  componentWillMount () {
    const {
      actions,
      match,
      categories
    } = this.props

    console.log('componentWillMount')
    const categoryParam = match.params.category

    if (!categories) {
      actions.getCategories()
    }

    actions.addToBreadcrumbs(categoryParam)
    if (categoryParam) {
      actions.getCategoryProducts(categoryParam, 0, false)
    }
  }

  componentWillReceiveProps (nextProps) {
    const {
      actions,
      match,
      categories,
      products
    } = nextProps

    const categoryParam = match.params.category
    console.log('componentWillReceiveProps')

    if (!categories) {
      actions.getCategories()
    }

    if (categoryParam) {
      actions.getCategoryProducts(categoryParam, 0, false)
    }
  }

  render () {
    const { 
      categories,
      childCategories,
      products,
      breadcrumbs,
      match
    } = this.props

    const selectedCategory = match.params.category || null

    const metaTitle = selectedCategory || translate('meta.products')
    const meta = {
      title: `${translate('project.name')} - ${metaTitle}`,
      location: window.location.href
    }

    return (
      <div>
        <MetaTags {...meta} />
        <Header />
        <Categories categories={categories} childCategories={childCategories} selectedCategory={selectedCategory} />
        <div className='col col-xs-100'>
          <div className='col col-xs-100 col-md-70'>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
          <div className='col col-xs-100 col-md-30'>
            <Sorting />
          </div>
        </div>
        <ProductList />
        <Footer />
      </div>
    )
  }
}

Products.defaultProps = {
  products: [],
  breadcrumbs: []
}

Products.propTypes = {
  products: PropTypes.array,
  breadcrumbs: PropTypes.array
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log(state.product_information)
  const props = {
    categories: state.catalog_information.categories,
    childCategories: state.catalog_information.childCategories,
    products: state.product_information.products,
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

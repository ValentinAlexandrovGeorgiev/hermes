import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
      match
    } = this.props

    const categoryParam = match.params.category

    // actions.addToBreadcrumbs(categoryParam)
    // if (categoryParam) {
    //   actions.getCategoryProducts(categoryParam, 12, false)
    // }
  }

  componentWillReceiveProps (nextProps) {
    const {
      actions,
      match,
      products
    } = nextProps

    const categoryParam = match.params.category
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
      location: window.location.href,
      index: true,
      keywords: `${translate('project.keywords')},${selectedCategory}`,
      description: `${translate('project.description')} - ${selectedCategory} - ${translate('meta.products.description')}`
    }

    return (
      <div>
        <MetaTags {...meta} />
        <Header />
        <Categories categories={categories} childCategories={childCategories} selectedCategory={selectedCategory} />
        <div className='col col-xs-100'>
          <div className='col col-xs-100 col-md-70'>
            <Breadcrumbs breadcrumbs={[selectedCategory]} />
          </div>
          <div className='col col-xs-100 col-md-30'>
            <Sorting />
          </div>
        </div>
        <ProductList category={selectedCategory} />
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

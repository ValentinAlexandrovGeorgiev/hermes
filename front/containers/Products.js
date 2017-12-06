import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import Categories from 'components/generics/Categories/Categories'
import ProductList from 'components/plp/ProductList/ProductList'
import Sorting from 'components/plp/Sorting/Sorting'

class Products extends Component {
  componentWillMount () {
    const {
      actions
    } = this.props

    actions.getCategories()
  }

  render () {
    const { 
      categories,
      childCategories
    } = this.props

    console.log('categories')
    console.log(categories)
    console.log('child categories')
    console.log(childCategories)

    return (
      <div>
        <Header />
        <Sorting />
        <Categories categories={categories} childCategories={childCategories} />
        <ProductList />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.catalog_information)
  const props = {
    categories: state.catalog_information.categories,
    childCategories: state.catalog_information.childCategories
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

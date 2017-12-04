import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {} from 'actions'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import Categories from 'components/generics/Categories/Categories'
import ProductList from 'components/plp/ProductList/ProductList'
import Sorting from 'components/plp/Sorting/Sorting'

class Products extends Component {
  render () {
    const { actions } = this.props
    return (
      <div>
        <Header />
        <Sorting />
        <Categories />
        <ProductList />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {}
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

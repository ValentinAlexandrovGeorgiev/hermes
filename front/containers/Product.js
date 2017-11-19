import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import ProductTitle from 'components/pdp/ProductTitle/ProductTitle'
import ProductDescription from 'components/pdp/ProductDescription/ProductDescription'
import ProductPrice from 'components/pdp/ProductPrice/ProductPrice'
import ProductMainImage from 'components/pdp/ProductMainImage/ProductMainImage'
import ProductId from 'components/pdp/ProductId/ProductId'

class Product extends Component {

  componentWillMount () {
    const { actions } = this.props
    actions.getProduct('1')
  }

  render () {
    const {
      product
    } = this.props

    const {
      name,
      description,
      price,
      currency,
      image,
      product_id
    } = product

    if (product.detail === 'Not found.') {
      return (
        <div>
          <Header />
          <h3>Съжаляваме, нямаме такъв продукт. Моля проверете линка, който сте отворили!</h3>
          <Footer />
        </div>
      )
    }

    return (
      <div>
        <Header />
        <ProductTitle name={name} />
        <ProductMainImage name={name} image={image} />
        <ProductId productId={product_id} />
        <ProductPrice price={price} currency={currency} />
        <ProductDescription description={description} />
        <Footer />
      </div>
    )
  }
}

Product.defaultProps = {
  product: {
    name: '',
    description: '',
    price: '',
    image: null,
    currency: 'BGN',
    product_id: ''
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    currency: PropTypes.string,
    product_id: PropTypes.string,
    detail: PropTypes.string
  })
}

const mapStateToProps = (state) => {
  const props = {
    product: state.product_information.product
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

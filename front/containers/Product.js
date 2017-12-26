import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import translate from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import ProductTitle from 'components/pdp/ProductTitle/ProductTitle'
import ProductDescription from 'components/pdp/ProductDescription/ProductDescription'
import ProductPrice from 'components/pdp/ProductPrice/ProductPrice'
import ProductMainImage from 'components/pdp/ProductMainImage/ProductMainImage'
import ProductId from 'components/pdp/ProductId/ProductId'
import MoreCategoryProducts from 'components/pdp/MoreCategoryProducts/MoreCategoryProducts'

class Product extends Component {

  componentWillMount () {
    const { 
      actions,
      match
    } = this.props

    actions.getProduct(match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    const { actions } = this.props

      console.log('nextProps.product.category')
      console.log(nextProps.product.category)
    if (nextProps.products.length === 0) {
      actions.getCategoryProducts(nextProps.product.category, 10)
    }
  }

  render () {
    const {
      product,
      products
    } = this.props

    const {
      name,
      description,
      price,
      currency,
      image_link,
      product_id,
      category
    } = product

    console.log('Product object: ')
    console.log(product)
    if (product.detail === 'Not found.') {
      const meta = {
        title: `${translate('project.name')} - ${translate('meta.product.not.found')}`,
        location: window.location.href,
        index: false
      }

      return (
        <div>
          <MetaTags {...meta} />
          <Header />
          <h3>Съжаляваме, нямаме такъв продукт. Моля проверете линка, който сте отворили!</h3>
          <Footer />
        </div>
      )
    }

    const meta = {
      title: `${translate('project.name')} - ${product.name}`,
      location: window.location.href,
      index: true,
      keywords: `${translate('project.keywords')},${translate('meta.pdp.keywords', `${product.name}`)}`,
      description: `${translate('project.description')} - ${translate('meta.pdp.description', `${product.name} - ${product.description}`)}`
    }
    
    return [
      <MetaTags key='MetaTags' {...meta} />,
      <Header key='Header' />,
      <div key='pdp' className='pdp'>
        <ProductTitle name={name} />
        <ProductMainImage name={name} image={image_link} />
        <div className='pdp__price-wrapper'>
          <ProductPrice price={price} currency={currency} />
          <ProductId productId={product_id} />
        </div>
        <ProductDescription description={description} />
        <MoreCategoryProducts products={products} category={category} />
      </div>,
      <Footer key='Footer' />
    ]
  }
}

Product.defaultProps = {
  product: {
    name: '',
    description: '',
    price: '',
    image: null,
    currency: 'BGN',
    product_id: '0',
    category: ''
  },
  products: []
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    currency: PropTypes.string,
    product_id: PropTypes.string,
    detail: PropTypes.string,
    category: PropTypes.string
  }),
  products: PropTypes.array
}

const mapStateToProps = (state) => {
  const props = {
    product: state.product_information.product,
    products: state.product_information.products
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

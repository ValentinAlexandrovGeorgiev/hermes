import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import { translate, langProperty } from 'translations'
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
    console.log('componentWillMount !')
    actions.getProduct(match.params.id)
  }

  render () {
    const {
      product,
      lang,
      products,
      actions
    } = this.props

    const {
      price,
      currency,
      image_link,
      product_id,
      category
    } = product

    if (products.length === 0 && category !== '') {
      actions.getCategoryProducts(category, 0, 10)
    }

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
          <h3 className='no-product-title'>{translate('pdp.noproduct')}</h3>
          <Link className='no-product-link' to='/'>{translate('home.page.link')}</Link>
          <Footer />
        </div>
      )
    }

    const name = product[langProperty('name', lang)]
    const description = product[langProperty('description', lang)]

    const meta = {
      title: `${translate('project.name')} - ${name}`,
      location: window.location.href,
      index: true,
      keywords: `${translate('project.keywords')},${translate('meta.pdp.keywords', `${name}`)}`,
      description: `${translate('project.description')} - ${translate('meta.pdp.description', `${name} - ${description}`)}`
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
        <MoreCategoryProducts id={product_id} products={products} />
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
    products: state.product_information.products,
    lang: state.language.lang
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

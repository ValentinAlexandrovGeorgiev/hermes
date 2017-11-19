import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'

class Product extends Component {

  componentWillMount () {
    const { actions } = this.props
    actions.getProduct('1')
  }

  render () {
    console.log(this.props.product)
    return (
      <div>
        <Header />

        <Footer />
      </div>
    )
  }
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

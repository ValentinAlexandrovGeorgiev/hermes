import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'

class Product extends Component {
  render () {
    const { actions } = this.props
    actions.getProduct('1')
    
  //   new Promise((resolve, reject) => {
  //     fetch(`https://localhost:8080/api/product/${id}/`, {
  //         method: 'GET',
  //         credentials: 'same-origin',
  //         headers: headers
  //     }).then(res => {
  //       return res.json()
  //     }).then((json) => {
  //       console.log(json)
  //       resolve(json);
  //     }).catch(err => {
  //       console.log('error', err)
  //       reject(err)
  //     })
  // });

    return (
      <div>
        <Header />

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
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

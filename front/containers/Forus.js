import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as ACTIONS from 'actions'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import Asset from 'components/generics/Asset/Asset'

import 'styles/pages/forus.scss'

class Forus extends Component {
  componentWillMount () {
    const { 
      actions,
      assets
    } = this.props

    // actions.getAsset('for-us')
    if (!assets['for-us']) {
      actions.getAsset('for-us')
    }

    if (!assets['contacts']) {
      actions.getAsset('contacts')
    }
  }

  render () {
    const {
      assets
    } = this.props
    console.log(assets)
    const forUsAsset = assets['for-us']
    const contactsAsset = assets['contacts']

    return (
      <div>
        <Header />
        <div className='for-us-container col-xs-100 col-md-70'>
          <Asset asset={forUsAsset} />
        </div>
        <div className='contacts-container offset-30 col-xs-100 col-md-70'>
          <Asset asset={contactsAsset} />
        </div>
        <Footer />
      </div>
    )
  }
}

Forus.defaultProps = {
  assets: {}
}

Forus.propTypes = {
  assets: PropTypes.shape({})
}

const mapStateToProps = (state) => {
  // console.log('mapStateToProps')
  // console.log(state)
  const props = {
    assets: state.asset_information.assets
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Forus)
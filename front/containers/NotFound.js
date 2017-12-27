import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import translate from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Asset from 'components/generics/Asset/Asset'
import Footer from 'components/generics/Footer/Footer'

import 'styles/pages/notfound.scss'

class NotFound extends Component {
  componentWillMount () {
    const { 
      actions,
      assets
    } = this.props

    if (!assets['contacts']) {
      actions.getAsset('contacts')
    }
  }

  render () {
    const {
      assets
    } = this.props
    const meta = {
      title: `${translate('project.name')} - ${translate('meta.notfound')}`,
      location: window.location.href,
      index: false
    }
    const contactsAsset = assets['contacts']

    return (
      <div>
        <MetaTags {...meta} />
        <Header />
        <div className='error-page col col-xs-100'>
          <h1>{translate('error.title')}</h1>
          <div className='error-description'>
            <img className='col col-xs-100 col-md-30' src='/static/images/hermes.png' alt='hermesgift' />
            <div className='col col-xs-100 col-md-70'>
              <p>{translate('error.description')}</p>
              <Asset asset={contactsAsset} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

NotFound.defaultProps = {
  assets: {}
}

const mapStateToProps = (state) => {
  const props = {
    assets: state.asset_information
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)

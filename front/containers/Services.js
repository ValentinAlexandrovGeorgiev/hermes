import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import translate from 'translations'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import ServicesGrid from 'components/services/ServicesGrid/ServicesGrid'

const MOCK_SERVICES_IDS = [
  'печат-върху-шапки-и-козирки',
  'печат-върху-текстил',
  'тампонен-печат'
]

class Services extends Component {
  componentWillMount () {
    const { actions } = this.props
    
    actions.getAsset(MOCK_SERVICES_IDS)
  }

  getServiceAssets (assets) {
    let services = []
    MOCK_SERVICES_IDS.forEach((assetId) => {
      if (assets[assetId]) {
        services = [...services, assets[assetId]]
      }
    })
    return services
  }

  render () {
    const {
      assets
    } = this.props

    return (
      <div>
        <Header />
        <h1 className='services-title'>{translate('services.title')}</h1>
        { assets ?
          <ServicesGrid services={this.getServiceAssets(assets)} />
          : null
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
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

export default connect(mapStateToProps, mapDispatchToProps)(Services)

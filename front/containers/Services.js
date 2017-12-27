import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import translate from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
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

    const meta = {
      title: `${translate('project.name')} - ${translate('services.title')}`,
      location: window.location.href,
      index: true,
      keywords: `${translate('project.keywords')}, ${translate('meta.services.keywords')}`,
      description: `${translate('project.description')} - ${translate('meta.services.description')}`
    }

    return (
      <div>
        <MetaTags {...meta} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Services)

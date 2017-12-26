import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import translate from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import ServiceInfo from 'components/services/ServiceInfo/ServiceInfo'

class Service extends Component {
  componentWillMount () {
    const {
      actions,
      match,
      assets
    } = this.props

    if (!assets || !assets[match.params.name]) {
      actions.getAsset([match.params.name])
    }
  }

  render () {
    const {
      assets,
      match
    } = this.props
    
    if (!assets) {
      return null
    }

    const asset = assets[match.params.name]

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
        <ServiceInfo service={asset} /> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Service)

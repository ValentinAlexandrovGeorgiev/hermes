import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import translate from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import HomeCarousel from 'components/home/HomeCarousel/HomeCarousel'
import Statistics from 'components/home/Statistics/Statistics'
import Asset from 'components/generics/Asset/Asset'

import 'styles/pages/home.scss'

class Home extends Component {
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
      title: `${translate('project.name')}`,
      location: window.location.href
    }
    console.log(assets)
    const contactsAsset = assets['contacts']

    return (
      <div className='home-page'>
        <MetaTags {...meta} />
        <Header />
        <HomeCarousel />
        <Statistics />
        <div className='contacts__wrapper'>
          <div className='logo__container col col-md-20'>
            <img className='hermes-logo' src='/static/images/hermes.png' alt='Hermes Gift' />  
          </div>
          <div className='contacts-container col col-md-80'>
            <Asset asset={contactsAsset} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

Home.defaultProps = {
  assets: {}
}

Home.propTypes = {
  assets: PropTypes.shape({})
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)

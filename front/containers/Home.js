import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
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

    if (!assets[2]) {
      actions.getAsset(2)
    }
  }

  render () {
    const {
      assets
    } = this.props

    const contactsAsset = assets[2]

    return (
      <div className='home-page'>
        <Header />
        <HomeCarousel />
        <Statistics />
        <div className='contacts__wrapper'>
          <div className='col col-md-20'>
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

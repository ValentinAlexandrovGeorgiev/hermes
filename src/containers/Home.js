import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {} from 'actions'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'
import HomeCarousel from 'components/home/HomeCarousel/HomeCarousel'

class Home extends Component {
  render () {
    const { actions } = this.props
    return (
      <div>
        <Header />
        <HomeCarousel />
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
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

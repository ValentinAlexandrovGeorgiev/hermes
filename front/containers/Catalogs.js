import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import Header from 'components/generics/Header/Header'
import CatalogGrid from 'components/cats/CatalogGrid/CatalogGrid'
import Footer from 'components/generics/Footer/Footer'

class Catalogs extends Component {

  componentWillMount () {
    const { 
      actions
    } = this.props
    console.log('getCatalogs')
    actions.getCatalogs()
  }
  render () {
    return (
      <div>
        <Header />
        <h1>Рекламни Каталози 2017</h1>
        <CatalogGrid />
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalogs)

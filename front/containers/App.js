import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import RouteRoot from 'routes/RouteRoot'
import * as ACTIONS from 'actions'
import Language from 'components/generics/Language/Language'

class App extends Component {
  render () {
    const {
      actions,
      router
    } = this.props

    return (
      <Language>
        <RouteRoot
          actions={actions}
          router={router}
        />
      </Language>
    )
  }
}

App.propTypes = {
  actions: PropTypes.shape({}),
  router: PropTypes.shape({})
}

const mapStateToProps = (state) => {
  const props = {
    router: state.router
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

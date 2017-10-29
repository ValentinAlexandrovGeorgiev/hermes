import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {} from 'actions'
import Main from 'components/App'

class Home extends Component {
  render () {
    const { actions } = this.props
    return <Main actions={actions} />
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

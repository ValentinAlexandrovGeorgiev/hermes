import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {} from 'actions'

class Test extends Component {
  render () {
    return (
      <div>
        {'Test routing'}
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

export default connect(mapStateToProps, mapDispatchToProps)(Test)

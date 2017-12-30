import React, { Component } from 'react'
import Dropdown from 'components/generics/Dropdown/Dropdown'
import { connect } from 'react-redux'
import { translate } from 'translations'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import './sorting.scss'

class Sorting extends Component {
  constructor () {
    super()

    this.state = {
      open: false,
      label: translate('sort.label')
    }

    this.openDropdown = this.openDropdown.bind(this)
  }

  openDropdown () {
    const {
      open
    } = this.state

    this.setState({
      open: !open
    })
  }

  componentDidMount () {
    document.onclick = (event) => {
      if (event.target.className !== 'sorting__choosen_one' && this.state.open) {
        this.setState({
          open: false
        })
      }
    }
  }

  changeLabel ({value, title}) {
    const {
      actions
    } = this.props
    
    actions.sort(value)

    this.setState({
      label: title,
      open: false
    })
  }

  render () {
    const items = [
      {
        title: translate('sort.label'),
        value: 'default'
      },
      {
        title: translate('sort.price'),
        value: 'price'
      },
      {
        title: translate('sort.name'),
        value: 'name'
      },
      {
        title: translate('sort.id'),
        value: 'id'
      }
    ]

    const {
      open,
      label
    } = this.state

    return (
      <div className='sorting__wrapper'>
        <div className='sorting__dropdown'>
          <span className='sorting__choosen_one' onClick={this.openDropdown}>{label}</span>
          <Dropdown items={items} open={open} wrapperClass={'custom_dropdown'} change={label => this.changeLabel(label)} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(null, mapDispatchToProps)(Sorting)

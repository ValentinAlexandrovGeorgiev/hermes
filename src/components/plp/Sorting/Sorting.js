import React, { Component } from 'react'
import Dropdown from 'components/generics/Dropdown/Dropdown'
import './sorting.scss'

class Sorting extends Component {
  constructor () {
    super()

    this.state = {
      open: false,
      label: 'Сортирай'
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

  changeLabel (label) {
    this.setState({
      label: label,
      open: false
    })
  }

  render () {
    const items = [
      'Сортирай',
      'Цена',
      'Име',
      'Номер'
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

export default Sorting

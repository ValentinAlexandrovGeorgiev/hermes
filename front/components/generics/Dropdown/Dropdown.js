import React, { Component } from 'react'
import './dropdown.scss'

class Dropdown extends Component {
  createChildren () {
    const {
      items,
      itemClass,
      change,
      option
    } = this.props

    return items.map((item, index) => {
      return (
        <div key={`${item}-${index}`} className={`dropdown__item ${itemClass}`}>
          {
            option === 'img' ?
            <img src={`/static/icons/${item}.svg`} alt={item} />
            : <span onClick={() => change(item)}>{item}</span>
          }
        </div>
      )
    })
  }

  render () {
    const {
      wrapperClass,
      open
    } = this.props

    if (open) {
      return (
        <div className={`dropdown__wrapper ${wrapperClass}`}>
          { this.createChildren() }
        </div>
      )
    }
    return null
  }
}

export default Dropdown

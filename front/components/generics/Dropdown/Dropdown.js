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
        <div key={`${item.value}-${index}`} className={`dropdown__item ${itemClass}`}>
          {
            option === 'img'
            ? <img src={`/static/icons/${item.value}.svg`} alt={item.title} />
            : <span onClick={() => change(item)}>{item.title}</span>
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

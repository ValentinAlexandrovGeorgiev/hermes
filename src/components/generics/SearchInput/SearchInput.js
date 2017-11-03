import React, { Component } from 'react'
import './searchinput.scss'

class SearchInput extends Component {
  render () {
    return (
      <div className='search__wrapper'>
        <input type='text' placeholder='Търси..' />
        <img className='magnifier' src='static/magnifier.svg' />
      </div>
    )
  }
}

export default SearchInput

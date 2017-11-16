import React, { Component } from 'react'
import './searchinput.scss'

class SearchInput extends Component {
  render () {
    return (
      <div className='search__wrapper'>
        <label htmlFor='hermes-search'>
          <input id='hermes-search' type='text' placeholder='Търси..' />
        </label>
        <img className='magnifier' src='static/icons/magnifier.svg' alt='hermes gift search icon' />
      </div>
    )
  }
}

export default SearchInput

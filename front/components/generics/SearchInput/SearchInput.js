import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { translate } from 'translations'

import './searchinput.scss'

class SearchInput extends Component {
  constructor () {
    super()

    this.state = {
      value: ''
    }
  }

  search () {
    const {
      value
    } = this.state

    const {
      history
    } = this.props

    history.push(`/search?q=${value}`)
  }

  changeSearch (event) {
    this.setState({
      value: event.target.value
    })
  }

  clickSearch (event) {
    event.preventDefault()
    const {
      value
    } = this.state

    const {
      history
    } = this.props

    history.push(`/search?q=${value}`)
  }

  render () {
    const {
      value
    } = this.state

    return (
      <div className='search__wrapper'>
        <form onSubmit={event => this.clickSearch(event)}>
          <label htmlFor='hermes-search'>
            <input onChange={event => this.changeSearch(event)} id='hermes-search' type='text' placeholder={translate('search.placeholder')} value={value} />
          </label>
          <input type='submit' value='submit' className='hide' />
        </form>
        <img onClick={() => this.search()} className='magnifier' src='/static/icons/magnifier.svg' alt='hermes gift search icon' />
      </div>
    )
  }
}

export default withRouter(SearchInput)

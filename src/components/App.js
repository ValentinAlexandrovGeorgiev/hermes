import React, { Component } from 'react'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div className='index'>
        <div className='notice'>
          {'Please edit'} <code>{'src/components/App.js'}</code>{'to get started!'}
        </div>
      </div>
    )
  }
}

App.defaultProps = {

}

export default App

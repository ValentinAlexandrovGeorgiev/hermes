import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import translate from 'translations'
import './breadcrumbs.scss'

class Breadcrumbs extends Component {

  createBreadcrumbs (breadcrumbs) {
    const lastPosition = breadcrumbs.length - 1

    return breadcrumbs.map((cat, index) => {
      if (index === lastPosition) {
        return (
          <Link key={index} to={`/products/${cat}`}>
            <b>{cat}</b> 
          </Link>
        )
      }

      if (index === 0) {
        return <Link to='/products' key={index}> {`${cat} > `} </Link>
      }
      
      if (lastPosition > 1) {
        return <Link to={`/products/${cat}`} key={index}> {`${cat} > `} </Link>
      }
      return cat
    })
  }

  render () {
    const {
      breadcrumbs,
      count
    } = this.props

    if (breadcrumbs.length === 0) {
      return null
    }

    return (
      <h1 className='breadcrumbs'>
        {this.createBreadcrumbs(breadcrumbs)}
        {count > 0
          ? <span>
              ({count})
            </span>
          : null
        }
      </h1>
    )
  }
}

Breadcrumbs.defaultProps = {
  breadcrumbs: []
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array
}

export default Breadcrumbs

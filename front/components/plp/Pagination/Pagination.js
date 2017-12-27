import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './pagination.scss'

class Pagination extends Component {
  render () {
    const {
      children,
      pagination
    } = this.props

    return (
      <div>
        {children}
        {
          pagination 
            ? <div className='pagination__wrapper col col-xs-100'>
                <span className='pagination__first'>
                  <i></i>
                  <i></i>
                </span>
                <span className='pagination__previous'>
                  <i></i>
                </span>
                <span className='pagination__current'>1</span>
                <span className='pagination__next'>
                  <i></i>
                </span>
                <span className='pagination__last'>
                  <i></i>
                  <i></i>
                </span>
              </div> 
            : null
        }
      </div>
    )
  }
}

Pagination.defaultProps = {
  catalog: {}
}

Pagination.propTypes = {
  catalog: PropTypes.shape({})
}

export default Pagination

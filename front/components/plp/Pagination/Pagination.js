import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './pagination.scss'

class Pagination extends Component {
  choosePage (trigger, start, page) {
    if (trigger === 'unactive') {
      return
    }

    const {
      actions,
      category,
      query,
      history,
      ordering
    } = this.props

    let order = ''
    if (ordering) {
      order = `&ordering=${ordering}`  
    }
    if (query || query === '') {
      actions.search(query, start, 12, ordering)
      history.push(`/search?q=${query}&page=${page}${order}`)
    } else {
      actions.getCategoryProducts(category, start, 12, ordering)
      history.push(`/products/${category}?page=${page}${order}`)
    }
  }

  render () {
    const {
      children,
      pagination,
      pages,
      currentPage
    } = this.props

    const currPage = parseInt(currentPage)

    const firstUnactive = currPage > 1 ? '' : 'unactive' 
    const prevUnactive = currPage > 1 ? '' : 'unactive' 
    const lastUnactive = currPage < pages ? '' : 'unactive' 
    const nextUnactive = currPage < pages ? '' : 'unactive' 

    return (
      <div>
        {children}
        {
          pagination 
            ? <div className='pagination__wrapper col col-xs-100'>
                <span onClick={() => this.choosePage(firstUnactive, 0, 1)} className={`pagination__first ${firstUnactive}`}>
                  <i></i>
                  <i></i>
                </span>
                <span onClick={() => this.choosePage(prevUnactive, (currPage - 2) * 12,  currPage - 1)} className={`pagination__previous ${prevUnactive}`}>
                  <i></i>
                </span>
                <span className='pagination__current'>{currPage}</span>
                <span onClick={() => this.choosePage(nextUnactive, currPage * 12, currPage + 1)} className={`pagination__next ${nextUnactive}`}>
                  <i></i>
                </span>
                <span onClick={() => this.choosePage(lastUnactive, (pages - 1) * 12, pages)} className={`pagination__last ${lastUnactive}`}>
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

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default withRouter(connect(null, mapDispatchToProps)(Pagination))

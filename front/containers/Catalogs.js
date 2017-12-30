import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { translate } from 'translations'
import * as ACTIONS from 'actions'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import CatalogGrid from 'components/cats/CatalogGrid/CatalogGrid'
import Footer from 'components/generics/Footer/Footer'

class Catalogs extends Component {

  componentWillMount () {
    const { 
      actions
    } = this.props

    actions.getCatalogs()
  }

  render () {
    const {
      catalogs,
      lang
    } = this.props

    const meta = {
      title: `${translate('project.name')} - ${translate('catalogs.title')}`,
      location: window.location.href,
      index: true,
      keywords: `${translate('project.keywords')}, ${translate('meta.catalogs.keywords')}`,
      description: `${translate('project.description')} - ${translate('meta.catalogs.description')}`
    }

    return (
      <div>
        <MetaTags {...meta} />
        <Header />
        <h1 className='catalogs__title'>{translate('catalogs.title')}</h1>
        <CatalogGrid catalogs={catalogs} lang={lang} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    catalogs: state.catalog_information.catalogs,
    lang: state.language.lang
  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogs)

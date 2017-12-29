import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class MetaTags extends Component {
  render () {
    const {
      location,
      title,
      description,
      keywords,
      index
    } = this.props

    const robots = index ? 'noodp, noydir, index, follow, archive, noyaca' : 'noindex, nofollow'

    return (
      <Helmet>
        <title>{title}</title>
        <link rel='canonical' href={location} />
        <meta name='description' content={description} />
        <meta name='title' content={title} />   
        <meta name='keywords' zname='keywords' content={keywords} />
        <meta name='robots' content={robots} />
      </Helmet>
    )
  }
}

export default MetaTags

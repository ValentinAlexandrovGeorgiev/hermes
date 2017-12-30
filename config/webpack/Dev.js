'use strict'

/**
 * Default dev server configuration.
 */
const webpack = require('webpack')
const WebpackBaseConfig = require('./Base')

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super()
    this.config = {
      devtool: 'cheap-module-source-map',
      entry: ['./client.js'],
      plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    }
  }
}

module.exports = WebpackDevConfig

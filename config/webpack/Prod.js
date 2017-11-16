'use strict'

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack')
const WebpackBaseConfig = require('./Base')

class WebpackProdConfig extends WebpackBaseConfig {

  constructor() {
    super()
    this.config = {
      cache: false,
      devtool: 'source-map',
      entry: [
        './client.js'
      ],
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    }
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'prod'
  }
}

module.exports = WebpackProdConfig

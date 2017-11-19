'use strict'  // eslint-disable-line

/**
 * Webpack configuration base class
 */
const fs = require('fs')
const path = require('path')

const npmBase = path.join(__dirname, '../../node_modules')

class WebpackBaseConfig {

  constructor() {
    this._config = {}
  }

  /**
   * Get the list of included packages
   * @return {Array} List of included packages
   */
  get includedPackages() {
    return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)))
  }

  /**
   * Set the config data.
   * This will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data)
    return this._config
  }

  /**
   * Get the global config
   * @return {Object} config Final webpack config
   */
  get config() {
    return this._config
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dev'
  }

  /**
   * Get the absolute path to front directory
   * @return {String}
   */
  get srcPathAbsolute() {
    return path.resolve('./front')
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {

    return {
      context: this.srcPathAbsolute,
      devtool: 'eval',
      watch: true,
      entry: './index.js',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js?$/,
            include: this.srcPathAbsolute,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'es2016', 'es2017']
            }
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loader: 'file-loader'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /^.((?!cssmodule).)*\.(sass|scss)$/,
            loaders: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
            ]
          },
          {
            test: /\.(js|jsx)$/,
            include: [].concat(
              this.includedPackages,
              [this.srcPathAbsolute]
            ),
            loaders: [
              // Note: Moved this to .babelrc
              { loader: 'babel-loader' }
            ]
          }
        ]
      },
      output: {
        path: path.resolve('./static'),
        filename: 'app.js'
      },
      plugins: [],
      resolve: {
        alias: {
          actions: `${this.srcPathAbsolute}/actions/`,
          components: `${this.srcPathAbsolute}/components/`,
          config: `${this.srcPathAbsolute}/config/${this.env}.js`,
          images: `${this.srcPathAbsolute}/images/`,
          sources: `${this.srcPathAbsolute}/sources/`,
          stores: `${this.srcPathAbsolute}/stores/`,
          styles: `${this.srcPathAbsolute}/styles/`,
          reducers: `${this.srcPathAbsolute}/reducers/`,
          routes: `${this.srcPathAbsolute}/routes/`
        },
        extensions: ['.js'],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      }
    }
  }
}

module.exports = WebpackBaseConfig

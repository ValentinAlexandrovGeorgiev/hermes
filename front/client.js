import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './stores'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import ScrollToTop from 'components/generics/ScrollToTop/ScrollToTop'

// Create the browser history
const history = createHistory()
// Build the history middleware
const middleware = routerMiddleware()
// Create the react store and add the middleware
const store = configureStore({}, [middleware])

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
}

// Import global styles
import './styles/index.scss'

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NextApp />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}

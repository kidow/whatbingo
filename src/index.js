import React from 'react'
import ReactDOM from 'react-dom'
import 'lib/styles/index.scss'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'
import penderMiddleware from 'redux-pender'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(penderMiddleware()))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()

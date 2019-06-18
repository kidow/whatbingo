import React from 'react'
import ReactDOM from 'react-dom'
import 'lib/styles/index.scss'
import App from 'components/App'
import * as serviceWorker from './serviceWorker'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()

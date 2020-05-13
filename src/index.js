import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './styles/app.scss'
import ConnectedApp from './containers/App'

import store from './store'

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
)

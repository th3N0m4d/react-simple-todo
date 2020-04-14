import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './styles.scss'
import { ConnectedApp } from './components/App'

import store from './store'

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
)

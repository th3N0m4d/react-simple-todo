import React from 'react'
import { render } from 'react-dom'

import './styles.scss'
import App from './components/App'

import { variants } from './consts'

const mockState = {
  initialTasks: [
    { id: 0, name: 'Buy wine', variant: variants.dark },
    { id: 1, name: 'Buy cheese', completed: true, variant: variants.warning },
    { id: 2, name: 'Prepare for interview', completed: true, author: 'Edie', variant: variants.info },
    { id: 3, name: 'Meditate', completed: true, author: 'Edie' }
  ]
}
render(
  <App {...mockState} />,
  document.getElementById('app')
)

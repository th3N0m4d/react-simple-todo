import React from 'react'
import { render } from 'react-dom'

import './styles.scss'
import App from './components/App'

const mockState = {
  tasks: [
    { id: 0, name: 'Buy wine' },
    { id: 1, name: 'Buy cheese', completed: true },
    { id: 2, name: 'Prepare for interview', completed: true, author: 'Edie' },
    { id: 3, name: 'Meditate', completed: true, author: 'Edie' }
  ],
  labels: [
    { id: -1, label: 'Choose one...' },
    { id: 0, label: 'House' },
    { id: 1, label: 'Work' },
    { id: 2, label: 'Spirituality' }
  ]
}
render(
  <App {...mockState} />,
  document.getElementById('app')
)

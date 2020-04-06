import React from 'react'
import renderer from 'react-test-renderer'

import App from '../components/App'

const expectToMatchSnapshot = (component) => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

const createApp = (props = {}) => (
  <App {...props} />
)

describe('App', () => {
  it('should render', () => {
    expectToMatchSnapshot(createApp())
  })

  it('should render tasks', () => {
    const tasks = [
      { id: 0, name: 'Buy wine' },
      { id: 1, name: 'Buy cheese' }
    ]
    expectToMatchSnapshot(createApp({ tasks }))
  })
})

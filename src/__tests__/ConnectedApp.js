import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as R from 'ramda'

import * as types from '@/constants/ActionTypes'
import ConnectedApp from '@/containers/App'

describe('ConnectedApp', () => {
  const middlewares = [thunk]
  const initialState = {}
  const mockStore = configureMockStore(middlewares)(initialState)

  it('should fetch tasks on mount', () => {
    mount(
      <Provider store={mockStore}>
        <ConnectedApp />
      </Provider>
    )

    const expectedAction = { type: types.FETCH_TASKS_STARTED }

    const firstAction = R.head(mockStore.getActions())

    expect(firstAction).toEqual(expectedAction)
  })
})

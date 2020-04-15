import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../constants/ActionTypes'

import {
  createTask,
  fetchTasksSucceeded,
  hideModal,
  showModal,
  fetchTasks,
  removeTask,
  updateTask
} from '../actions'
import * as api from '../api'

jest.unmock('../api')

api.createTask = jest.fn(
  () => new Promise((resolve, reject) => resolve({ data: 'Foo' }))
)

api.fetchTasks = jest.fn(
  () => new Promise((resolve, reject) => resolve({ data: [{ id: 0, name: 'Buy wine' }] }))
)

api.removeTask = jest.fn(
  () => new Promise((resolve, reject) => resolve({ data: 'Success!' }))
)

api.updateTask = jest.fn(
  () => new Promise((resolve, reject) => resolve({ data: { id: 0, name: 'Foo' } }))
)

describe('Action Creators', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  it('should handle task creation', () => {
    const expectedActions = [
      { type: types.CREATE_TASK_REQUESTED },
      { type: types.CREATE_TASK_SUCCEEDED, payload: { task: 'Foo' } }
    ]

    const store = mockStore({
      tasks: []
    })

    return store.dispatch(createTask({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(api.createTask).toHaveBeenCalled()
    })
  })

  it('should handle fetch tasks', () => {
    const expectedActions = [
      { type: types.FETCH_TASKS_STARTED },
      { type: types.FETCH_TASKS_SUCCEEDED, payload: { tasks: [{ id: 0, name: 'Buy wine' }] } }
    ]

    const store = mockStore({
      tasks: []
    })

    return store.dispatch(fetchTasks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(api.fetchTasks).toHaveBeenCalled()
    })
  })

  it('should handle task removal', () => {
    const store = mockStore({})
    const TASK_ID = 77
    const expectedActions = [
      { type: types.REMOVE_TASK_REQUESTED },
      { type: types.REMOVE_TASK_SUCCEEDED, payload: { taskId: TASK_ID } }
    ]

    return store.dispatch(removeTask(TASK_ID)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(api.removeTask).toHaveBeenCalled()
    })
  })

  it('should handle task update', () => {
    const store = mockStore({})
    const task = { id: 0, name: 'Foo' }
    const expectedActions = [
      { type: types.TASK_UPDATE_REQUESTED },
      { type: types.TASK_UPDATE_SUCCEEDED, payload: task }
    ]

    return store.dispatch(updateTask(task)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(api.updateTask).toHaveBeenCalled()
    })
  })

  it('should handle successful task creation', () => {
    const tasks = [{
      name: 'House cleaning',
      author: 'Edie',
      completed: false,
      variant: 'info'
    }]

    const expectedAction = { type: types.FETCH_TASKS_SUCCEEDED, payload: { tasks } }

    expect(fetchTasksSucceeded(tasks)).toEqual(expectedAction)
  })

  it('should handle modal displaying', () => {
    const expectedAction = { type: types.SHOW_MODAL, payload: { modalShow: true } }

    expect(showModal()).toEqual(expectedAction)
  })

  it('should handle modal hidding', () => {
    const expectedAction = { type: types.HIDE_MODAL, payload: { modalShow: false } }

    expect(hideModal()).toEqual(expectedAction)
  })
})

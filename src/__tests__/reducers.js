import tasks from '../reducers'
import {
  showModal,
  hideModal,
  fetchTasksSucceeded,
  removeTaskSucceeded
} from '../actions'
import * as types from '../constants/ActionTypes'

describe('Reducers', () => {
  const task = {
    id: 0,
    name: 'Buy wine'
  }

  const initialState = {
    tasks: [task],
    modalShow: false
  }

  it('should return default state', () => {
    expect(tasks(initialState, {})).toEqual(initialState)
  })

  it(`should handle action type ${types.SHOW_MODAL}`, () => {
    const newState = { ...initialState, modalShow: true }

    expect(tasks(initialState, showModal())).toEqual(newState)
  })

  it(`should handle action type ${types.HIDE_MODAL}`, () => {
    const newState = { ...initialState, modalShow: false }

    expect(tasks(initialState, hideModal())).toEqual(newState)
  })

  it(`should handle action type ${types.FETCH_TASKS_SUCCEEDED}`, () => {
    const newState = { ...initialState, tasks: [task] }

    expect(tasks(initialState, fetchTasksSucceeded([task]))).toEqual(newState)
  })

  it(`should handle action type ${types.REMOVE_TASK_SUCCEEDED}`, () => {
    const newState = { ...initialState, tasks: [] }
    const TASK_ID = 0

    expect(tasks(initialState, removeTaskSucceeded(TASK_ID))).toEqual(newState)
  })
})

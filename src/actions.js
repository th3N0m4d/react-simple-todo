import * as api from './api'
import * as types from './constants/ActionTypes'

const createTask = task => {
  return dispatch => {
    dispatch(createTaskRequested())
    return api.createTask(task)
      .then(resp => dispatch(createTaskSucceeded(resp.data))
      )
  }
}

const createTaskSucceeded = task => ({
  type: types.CREATE_TASK_SUCCEEDED,
  payload: {
    task
  }
})

const createTaskRequested = () => ({
  type: types.CREATE_TASK_REQUESTED
})

const showModal = () => ({
  type: types.SHOW_MODAL,
  payload: {
    modalShow: true
  }
})

const hideModal = () => ({
  type: types.HIDE_MODAL,
  payload: {
    modalShow: false
  }
})

const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksStarted())
    return api.fetchTasks().then(resp => {
      dispatch(fetchTasksSucceeded(resp.data))
    })
  }
}

const fetchTasksStarted = () => ({
  type: types.FETCH_TASKS_STARTED
})

const fetchTasksSucceeded = tasks => ({
  type: types.FETCH_TASKS_SUCCEEDED,
  payload: {
    tasks
  }
})

export {
  showModal,
  hideModal,
  fetchTasks,
  createTask,
  fetchTasksSucceeded,
  createTaskRequested,
  createTaskSucceeded
}

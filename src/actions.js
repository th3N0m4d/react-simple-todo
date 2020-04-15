import * as api from './api'
import * as types from './constants/ActionTypes'

const createTaskSucceeded = task => ({
  type: types.CREATE_TASK_SUCCEEDED,
  payload: task
})

const createTaskRequested = () => ({
  type: types.CREATE_TASK_REQUESTED
})

const createTask = task => {
  return dispatch => {
    dispatch(createTaskRequested())
    return api.createTask(task)
      .then(resp => dispatch(createTaskSucceeded(resp.data)))
  }
}

const removeTaskRequested = () => ({
  type: types.REMOVE_TASK_REQUESTED
})

const removeTaskSucceeded = taskId => ({
  type: types.REMOVE_TASK_SUCCEEDED,
  payload: { taskId }
})

const removeTask = taskId => {
  return dispatch => {
    dispatch(removeTaskRequested())
    return api.removeTask(taskId)
      .then(() => dispatch(removeTaskSucceeded(taskId)))
  }
}

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

const fetchTasksStarted = () => ({
  type: types.FETCH_TASKS_STARTED
})

const fetchTasksSucceeded = tasks => ({
  type: types.FETCH_TASKS_SUCCEEDED,
  payload: {
    tasks
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

const updateTaskRequested = () => ({
  type: types.TASK_UPDATE_REQUESTED
})

const updateTaskSucceeded = task => ({
  type: types.TASK_UPDATE_SUCCEEDED,
  payload: task
})

const updateTask = task => {
  return dispatch => {
    dispatch(updateTaskRequested())
    return api.updateTask(task).then(() => {
      dispatch(updateTaskSucceeded(task))
    })
  }
}

export {
  showModal,
  hideModal,
  fetchTasks,
  createTask,
  fetchTasksSucceeded,
  createTaskRequested,
  createTaskSucceeded,
  removeTask,
  removeTaskSucceeded,
  updateTask,
  updateTaskRequested,
  updateTaskSucceeded
}

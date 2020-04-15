import * as types from './constants/ActionTypes'

const initialState = {
  tasks: [],
  modalShow: false
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_TASK_SUCCEEDED:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case types.REMOVE_TASK_SUCCEEDED:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.taskId)
      }

    case types.TASK_UPDATE_SUCCEEDED:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return { ...task, ...action.payload }
          }

          return task
        })
      }

    case types.SHOW_MODAL:
    case types.HIDE_MODAL:
    case types.FETCH_TASKS_SUCCEEDED:
      return { ...state, ...action.payload }
    default:
      break
  }
  return state
}

export default todo

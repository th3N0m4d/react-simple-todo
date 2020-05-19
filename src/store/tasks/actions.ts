import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"

import * as api from '@/api'
import Task from '@/models/Task'

import {
    CREATE_TASK_SUCCEEDED,
    CREATE_TASK_REQUESTED,
    TaskActionTypes
} from '@/store/tasks/types'

// CREATE TASK

const createTaskSucceeded = (task: Task): TaskActionTypes => ({
    type: CREATE_TASK_SUCCEEDED,
    task
})

const createTaskRequested = (): TaskActionTypes => ({
    type: CREATE_TASK_REQUESTED
})

const createTask = (task: Task):
    ThunkAction<Promise<AnyAction>, any, any, TaskActionTypes> => {
    return async dispatch => {
        dispatch(createTaskRequested())
        const { data } = await api.createTask(task)
        return dispatch(createTaskSucceeded(data))
    }

}

// REMOVE TASK

// const removeTaskRequested: ActionCreator<RemoveTaskRequested> = () => ({
//     type: REMOVE_TASK_REQUESTED
// })

// const removeTaskSucceeded: ActionCreator<RemoveTaskSucceeded> = taskId => ({
//     type: REMOVE_TASK_SUCCEEDED,
//     taskId
// })

// const removeTask: ActionCreator<ThunkAction<Promise<AnyAction>, State, null, RemoveTaskRequested>> = taskId => {
//     return async (dispatch: Dispatch) => {
//         dispatch(removeTaskRequested())
//         await api.removeTask(taskId)
//         return dispatch(removeTaskSucceeded(taskId))
//     }
// }

// FETCH TASKS

// const fetchTasksRequested: ActionCreator<FetchTaskRequested> = () => ({
//     type: FETCH_TASKS_REQUESTED
// })

// const fetchTasksSucceeded: ActionCreator<FetchTaskSucceeded> = tasks => ({
//     type: FETCH_TASKS_SUCCEEDED,
//     tasks
// })

// const fetchTasks: ActionCreator<ThunkAction<Promise<AnyAction>, State, null, FetchTaskRequested>> = () => {
//     return async (dispatch: Dispatch) => {
//         dispatch(fetchTasksRequested())
//         const { data } = await api.fetchTasks()
//         return dispatch(fetchTasksSucceeded(data))
//     }
// }

// UPDATE TASK

// const updateTaskRequested: ActionCreator<UpdateTaskRequested> = () => ({
//     type: TASK_UPDATE_REQUESTED
// })

// const updateTaskSucceeded: ActionCreator<UpdateTaskSucceeded> = task => ({
//     type: TASK_UPDATE_SUCCEEDED,
//     task
// })

// const updateTask: ActionCreator<ThunkAction<Promise<AnyAction>, State, null, UpdateTaskRequested>> = task => {
//     return async (dispatch: Dispatch) => {
//         dispatch(updateTaskRequested())
//         await api.updateTask(task)
//         return dispatch(updateTaskSucceeded(task))
//     }
// }

export {
    createTask,
    createTaskRequested,
    createTaskSucceeded
}

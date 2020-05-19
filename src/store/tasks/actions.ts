import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"

import * as api from '@/api'
import Task from '@/models/Task'

import {
    CREATE_TASK_SUCCEEDED,
    CREATE_TASK_REQUESTED,
    REMOVE_TASK_REQUESTED,
    REMOVE_TASK_SUCCEEDED,
    FETCH_TASKS_REQUESTED,
    FETCH_TASKS_SUCCEEDED,
    TASK_UPDATE_REQUESTED,
    TASK_UPDATE_SUCCEEDED,
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

const removeTaskRequested = (): TaskActionTypes => ({
    type: REMOVE_TASK_REQUESTED
})

const removeTaskSucceeded = (taskId: string): TaskActionTypes => ({
    type: REMOVE_TASK_SUCCEEDED,
    taskId
})

const removeTask = (taskId: string):
    ThunkAction<Promise<AnyAction>, any, any, TaskActionTypes> => {
    return async dispatch => {
        dispatch(removeTaskRequested())
        await api.removeTask(taskId)
        return dispatch(removeTaskSucceeded(taskId))
    }
}

// FETCH TASKS

const fetchTasksRequested = (): TaskActionTypes => ({
    type: FETCH_TASKS_REQUESTED
})

const fetchTasksSucceeded = (tasks: Task[]): TaskActionTypes => ({
    type: FETCH_TASKS_SUCCEEDED,
    tasks
})

const fetchTasks = (): ThunkAction<Promise<any>, any, any, TaskActionTypes> => {
    return async dispatch => {
        dispatch(fetchTasksRequested())
        const { data } = await api.fetchTasks()
        return dispatch(fetchTasksSucceeded(data))
    }
}

// UPDATE TASK

const updateTaskRequested = (): TaskActionTypes => ({
    type: TASK_UPDATE_REQUESTED
})

const updateTaskSucceeded = (task: Task): TaskActionTypes => ({
    type: TASK_UPDATE_SUCCEEDED,
    task
})

const updateTask = (task: Task):
    ThunkAction<Promise<any>, any, any, TaskActionTypes> => {
    return async dispatch => {
        dispatch(updateTaskRequested())
        const { data } = await api.updateTask(task)
        return dispatch(updateTaskSucceeded(data))
    }
}

export {
    createTask,
    removeTask,
    fetchTasks,
    updateTask
}

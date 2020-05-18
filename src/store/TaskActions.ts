import { ActionCreator, AnyAction, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"

import * as api from '@/api'
import Task from '@/models/Task'
import TaskActionTypes from '@/constants/TaskActionTypes'
import State from '@/store/State'

// CREATE TASK

interface CreateTaskSucceeded {
    type: TaskActionTypes.CREATE_TASK_SUCCEEDED,
    task: Task
}

const createTaskSucceeded: ActionCreator<CreateTaskSucceeded> = task => ({
    type: TaskActionTypes.CREATE_TASK_SUCCEEDED,
    task
})

interface CreateTaskRequested {
    type: TaskActionTypes.CREATE_TASK_REQUESTED
}

const createTaskRequested: ActionCreator<CreateTaskRequested> = () => ({
    type: TaskActionTypes.CREATE_TASK_REQUESTED
})

const createTask: ActionCreator<ThunkAction<Promise<AnyAction>, State, null, CreateTaskRequested>> = task => {
    return async (dispatch: Dispatch) => {
        dispatch(createTaskRequested())
        const { data } = await api.createTask(task)
        return dispatch(createTaskSucceeded(data))
    }
}

// REMOVE TASK

interface RemoveTaskRequested {
    type: TaskActionTypes.REMOVE_TASK_REQUESTED
}

const removeTaskRequested: ActionCreator<RemoveTaskRequested> = () => ({
    type: TaskActionTypes.REMOVE_TASK_REQUESTED
})

interface RemoveTaskSucceeded {
    type: TaskActionTypes.REMOVE_TASK_SUCCEEDED,
    taskId: string
}

const removeTaskSucceeded: ActionCreator<RemoveTaskSucceeded> = taskId => ({
    type: TaskActionTypes.REMOVE_TASK_SUCCEEDED,
    taskId
})

const removeTask: ActionCreator<ThunkAction<Promise<AnyAction>, State, null, RemoveTaskRequested>> = taskId => {
    return async (dispatch: Dispatch) => {
        dispatch(removeTaskRequested())
        await api.removeTask(taskId)
        return dispatch(removeTaskSucceeded(taskId))
    }
}

// FETCH TASKS

interface FetchTaskRequested {
    type: TaskActionTypes.FETCH_TASKS_REQUESTED
}

const fetchTasksRequested: ActionCreator<FetchTaskRequested> = () => ({
    type: TaskActionTypes.FETCH_TASKS_REQUESTED
})

interface FetchTaskSucceeded {
    type: TaskActionTypes.FETCH_TASKS_SUCCEEDED,
    tasks: Task[]
}

const fetchTasksSucceeded: ActionCreator<FetchTaskSucceeded> = tasks => ({
    type: TaskActionTypes.FETCH_TASKS_SUCCEEDED,
    tasks
})

const fetchTasks: ActionCreator<ThunkAction<Promise<AnyAction>, State, null, FetchTaskRequested>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchTasksRequested())
        const { data } = await api.fetchTasks()
        return dispatch(fetchTasksSucceeded(data))
    }
}

// UPDATE TASK

interface UpdateTaskRequested {
    type: TaskActionTypes.TASK_UPDATE_REQUESTED
}

const updateTaskRequested: ActionCreator<UpdateTaskRequested> = () => ({
    type: TaskActionTypes.TASK_UPDATE_REQUESTED
})

interface UpdateTaskSucceeded {
    type: TaskActionTypes.TASK_UPDATE_SUCCEEDED,
    task: Task
}

const updateTaskSucceeded: ActionCreator<UpdateTaskSucceeded> = task => ({
    type: TaskActionTypes.TASK_UPDATE_SUCCEEDED,
    task
})

const updateTask: ActionCreator<ThunkAction<Promise<AnyAction>, State, null, UpdateTaskRequested>> = task => {
    return async (dispatch: Dispatch) => {
        dispatch(updateTaskRequested())
        await api.updateTask(task)
        return dispatch(updateTaskSucceeded(task))
    }
}

export {
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

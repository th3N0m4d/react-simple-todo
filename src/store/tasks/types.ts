import Task from '@/models/Task'

export const CREATE_TASK_SUCCEEDED = 'CREATE_TASK_SUCCEEDED'
export const CREATE_TASK_REQUESTED = 'CREATE_TASK_REQUESTED'

export const FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED'
export const FETCH_TASKS_REQUESTED = 'FETCH_TASKS_REQUESTED'

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const REMOVE_TASK_REQUESTED = 'REMOVE_TASK_REQUESTED'
export const REMOVE_TASK_SUCCEEDED = 'REMOVE_TASK_SUCCEEDED'

export const TASK_UPDATE_REQUESTED = 'TASK_UPDATE_REQUESTED'
export const TASK_UPDATE_SUCCEEDED = 'TASK_UPDATE_SUCCEEDED'

interface CreateTaskSucceeded {
    type: typeof CREATE_TASK_SUCCEEDED,
    task: Task
}

interface CreateTaskRequested {
    type: typeof CREATE_TASK_REQUESTED
}

interface RemoveTaskRequested {
    type: typeof REMOVE_TASK_REQUESTED
}

interface RemoveTaskSucceeded {
    type: typeof REMOVE_TASK_SUCCEEDED,
    taskId: string
}

interface FetchTaskRequested {
    type: typeof FETCH_TASKS_REQUESTED
}

interface FetchTaskSucceeded {
    type: typeof FETCH_TASKS_SUCCEEDED,
    tasks: Task[]
}

interface UpdateTaskRequested {
    type: typeof TASK_UPDATE_REQUESTED
}

interface UpdateTaskSucceeded {
    type: typeof TASK_UPDATE_SUCCEEDED,
    task: Task
}

export type TaskActionTypes =
    | CreateTaskRequested
    | CreateTaskSucceeded
    | RemoveTaskRequested
    | RemoveTaskSucceeded
    | FetchTaskRequested
    | FetchTaskSucceeded
    | UpdateTaskRequested
    | UpdateTaskSucceeded
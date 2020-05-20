import { Reducer } from "redux"

import {
    TaskActionTypes,
    CREATE_TASK_SUCCEEDED,
    FETCH_TASKS_SUCCEEDED,
    REMOVE_TASK_SUCCEEDED,
    TASK_UPDATE_SUCCEEDED
} from '@/store/tasks/types'
import State from '@/store/tasks/State'

const initialState: State = {
    tasks: []
}

const tasks: Reducer<State, TaskActionTypes> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CREATE_TASK_SUCCEEDED:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case REMOVE_TASK_SUCCEEDED:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            }

        case TASK_UPDATE_SUCCEEDED:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.task.id) {
                        return { ...task, ...action.task }
                    }

                    return task
                })
            }

        case FETCH_TASKS_SUCCEEDED:
            return { ...state, tasks: action.tasks }
        default:
            break
    }
    return state
}



export default tasks
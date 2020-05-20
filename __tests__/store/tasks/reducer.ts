import tasks from '@/store/tasks/reducer'
import State from '@/store/tasks/State'
import Task from '@/models/Task'
import {
    FETCH_TASKS_REQUESTED,
    FETCH_TASKS_SUCCEEDED,
    REMOVE_TASK_SUCCEEDED,
    TASK_UPDATE_SUCCEEDED,
    CREATE_TASK_SUCCEEDED
} from '@/store/tasks/types'

import {
    fetchTasksSucceeded,
    removeTaskSucceeded,
    updateTaskSucceeded,
    createTaskSucceeded
} from '@/store/tasks/actions'

describe('Tasks reducer', () => {
    const task: Task = {
        id: 'abc',
        name: 'Buy wine',
        completed: false
    }

    const initialState: State = {
        tasks: [task]
    }

    it('should return default state', () => {
        expect(tasks(initialState, { type: FETCH_TASKS_REQUESTED })).toEqual(initialState)
    })

    it(`should handle action type ${FETCH_TASKS_SUCCEEDED}`, () => {
        const newState = { ...initialState, tasks: [task] }

        expect(tasks(initialState, fetchTasksSucceeded([task]))).toEqual(newState)
    })

    it(`should handle action type ${REMOVE_TASK_SUCCEEDED}`, () => {
        const newState = { ...initialState, tasks: [] }
        const TASK_ID = 'abc'

        expect(tasks(initialState, removeTaskSucceeded(TASK_ID))).toEqual(newState)
    })

    it(`should handle action type ${TASK_UPDATE_SUCCEEDED}`, () => {
        const taskToUpdate = { ...task, completed: true }
        const newState = { ...initialState, tasks: [{ ...task, completed: true }] }

        expect(tasks(initialState, updateTaskSucceeded(taskToUpdate))).toEqual(newState)
    })

    it(`should handle action type ${CREATE_TASK_SUCCEEDED}`, () => {
        const newState = { ...initialState, tasks: [task, task] }

        expect(tasks(initialState, createTaskSucceeded(task))).toEqual(newState)
    })
})

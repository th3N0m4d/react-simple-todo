import createMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import mockAxios from 'axios'
import { mocked } from 'ts-jest/utils';

import {
    createTask,
    removeTask,
    fetchTasks,
    updateTask
} from '@/store/tasks/actions';
import State from '@/store/State';
import Task from '@/models/Task';
import {
    CREATE_TASK_REQUESTED,
    CREATE_TASK_SUCCEEDED,
    REMOVE_TASK_SUCCEEDED,
    REMOVE_TASK_REQUESTED,
    TaskActionTypes,
    FETCH_TASKS_REQUESTED,
    FETCH_TASKS_SUCCEEDED,
    TASK_UPDATE_REQUESTED,
    TASK_UPDATE_SUCCEEDED
} from '@/store/tasks/types';


describe('TaskActions', () => {
    type Something = ThunkDispatch<Promise<any>, any, TaskActionTypes>
    const middlewares = [thunk]
    const mockStore = createMockStore<State, Something>(middlewares)
    const task: Task = {
        id: '',
        name: '',
        completed: false,
    }


    it('should handle task creation', async () => {

        mocked(mockAxios.post).mockImplementationOnce(() =>
            Promise.resolve({ data: task }),
        )
        const expectedActions = [
            { type: CREATE_TASK_REQUESTED },
            { type: CREATE_TASK_SUCCEEDED, task }
        ]

        const store = mockStore({
            tasks: []
        })

        await store.dispatch(createTask(task))

        expect(store.getActions()).toEqual(expectedActions)
    })

    it('should handle remove task', async () => {
        const taskId = 'ABCD234'
        const expectedActions = [
            { type: REMOVE_TASK_REQUESTED },
            { type: REMOVE_TASK_SUCCEEDED, taskId }
        ]

        mocked(mockAxios.delete).mockImplementationOnce(() => Promise.resolve({ data: taskId }))

        const store = mockStore({
            tasks: []
        })

        await store.dispatch(removeTask(taskId))

        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should handle fetch tasks', async () => {
        const tasks = [task]
        const expectedActions = [
            { type: FETCH_TASKS_REQUESTED },
            { type: FETCH_TASKS_SUCCEEDED, tasks }
        ]

        mocked(mockAxios.get).mockImplementationOnce(() => Promise.resolve({ data: tasks }))

        const store = mockStore({
            tasks: []
        })

        await store.dispatch(fetchTasks())

        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should handle update task', async () => {
        const updatedTask = { ...task, ...{ completed: true } }

        const expectedActions = [
            { type: TASK_UPDATE_REQUESTED },
            { type: TASK_UPDATE_SUCCEEDED, task: updatedTask }
        ]

        mocked(mockAxios.put).mockImplementationOnce(() => Promise.resolve({ data: updatedTask }))

        const store = mockStore({
            tasks: []
        })

        await store.dispatch(updateTask(task))

        expect(store.getActions()).toEqual(expectedActions)
    });
});
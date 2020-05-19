import createMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import mockAxios from 'axios'
import { mocked } from 'ts-jest/utils';

import { createTask } from '@/store/tasks/actions';
import State from '@/store/State';
import Task from '@/models/Task';
import { CREATE_TASK_REQUESTED, CREATE_TASK_SUCCEEDED, TaskActionTypes } from '@/store/tasks/types';


describe('TaskActions', () => {
    type Something = ThunkDispatch<Promise<any>, any, TaskActionTypes>
    const middlewares = [thunk]
    const mockStore = createMockStore<State, Something>(middlewares)


    it('should handle task creation', async () => {
        const task: Task = {
            id: '',
            name: '',
            completed: false,
        }

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
});
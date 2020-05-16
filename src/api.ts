import axios from 'axios'

import Task from './models/Task'

const API_BASE_URL = 'http://localhost:3001'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const createTask = (task: Task) => client.post('/tasks', task)
const fetchTasks = () => client.get('/tasks')
const removeTask = (taskId: string) => client.delete(`/tasks/${taskId}`)
const updateTask = (task: Task) => client.put(`/tasks/${task.id}`, task)

export {
  createTask,
  fetchTasks,
  removeTask,
  updateTask
}

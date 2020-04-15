import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const createTask = task => client.post('/tasks')
const fetchTasks = () => client.get('/tasks')
const removeTask = taskId => client.delete(`/tasks/${taskId}`)
const updateTask = task => client.put(`/tasks/${task.id}`, task)

export {
  createTask,
  fetchTasks,
  removeTask,
  updateTask
}

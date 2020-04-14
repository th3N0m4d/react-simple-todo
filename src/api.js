import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const fetchTasks = () => client.get('/tasks')

const createTask = task => client.post('/tasks')

const removeTask = taskId => client.delete(`/tasks/${taskId}`)

export { fetchTasks, createTask, removeTask }

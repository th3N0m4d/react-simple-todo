export default interface Task {
    id: string,
    name: string,
    dueDate?: number,
    categoryId?: string,
    completed: boolean
}
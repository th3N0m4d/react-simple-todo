export default interface Task {
    id: string,
    name: string,
    author: string,
    categoryId?: string,
    variant?: number,
    completed: boolean
}
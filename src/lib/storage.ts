import type { Task } from "@/types/task"

const STORAGE_KEY = 'todo-list-tasks'

export function loadTasks(): Task[] 
// on charge les tâches depuis le localStorage
{
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    } catch (error) {
        console.error('Erreur lors du chargement des tâches depuis le localStorage', error)
        return []
    }
}

export function saveTasks(tasks: Task[]): void
// on sauvegarde les tâches dans le localStorage
{
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
        console.error('Erreur lors de la sauvegarde des tâches dans le localStorage', error)
    }
}   
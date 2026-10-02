import { useState, useEffect } from "react";
import type { Task } from "@/types/task";
import TaskForm from "@/components/TaskForm";

import TaskList from "@/components/TaskList";
import TaskSummary from "./components/TaskSummary";
import TaskFilters from "./components/TaskFilters";
import { loadTasks, saveTasks } from "./lib/storage";


type FilterType = "all" | "todo" | "done";



function App() {
  const [tasks, setTasks] = useState<Task[]>(()=> loadTasks()) // on utilise une fonction pour initialiser l'état des tâches à partir du localStorage ou des tâches initiales
  const [filter, setFilter] = useState<FilterType>('all')
  const [search, setSearch] = useState<string>('')
  

  useEffect(() => {
    saveTasks(tasks) // on sauvegarde les tâches dans le localStorage à chaque fois que l'état des tâches change
  }, [tasks])


  // filtrer les tâches en fonction du filtre sélectionné et de la recherche
  const filteredTasks = tasks.filter(t => {

    if (filter === 'todo') return !t.completed
    if (filter === 'done') return t.completed
    
    return true

  }).filter(t => t.title.toLowerCase().includes(search.toLowerCase()))

  function handleAdd(newTask: Task) {
    setTasks([...tasks, newTask])

  }
  function handleToggle(id: string) {
    setTasks(tasks.map(t =>
       t.id === id ? {...t, completed: !t.completed} : t))} 
// on utilise la méthode map pour parcourir le tableau de tâches et inverser l'état de la tâche dont l'id correspond à celui passé en paramètre

  function handleDelete(id: string) {
    setTasks(tasks.filter(t => t.id !== id)) // on utilise la méthode filter pour supprimer la tâche dont l'id correspond à celui passé en paramètre
  }

  function handleEdit(id: string, newTitle: string) {
    setTasks(tasks.map(t =>
      t.id === id ? {...t, title: newTitle} : t)) // on utilise la méthode map pour parcourir le tableau de tâches et modifier le titre de la tâche dont l'id correspond à celui passé en paramètre
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto max-w-2xl px-4">

        <h1 className="text-3xl font-bold mb-6">
          Ma liste de taches
        </h1>

        <TaskForm onAdd={handleAdd} />

        <TaskSummary tasks={tasks} />

        <TaskFilters
          filter={filter}
          search={search}
          onFilterChange={setFilter}
          onSearchChange={setSearch}
        />

        <TaskList  // on passe les props à TaskList
        tasks={filteredTasks} // on passe les tâches filtrées en props à TaskList
        onToggle={handleToggle} // on passe la fonction handleToggle en props à TaskList
        onDelete={handleDelete}
        onEdit={handleEdit}
        />

      </div>
    </div>

  )

}

export default App
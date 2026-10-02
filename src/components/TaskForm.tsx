import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Task } from '@/types/task'
import { Button } from '@/components/ui/button'

type TaskFormProps = {
  onAdd: (task: Task) => void
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const trimmed = title.trim()



  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    if (trimmed === '') {
      setError('Le titre ne peut pas etre vide')
      return
    }

    if (trimmed.length > 100) {

      setError('Le titre ne peut pas dépasser 100 caractères')
      return
    }


    onAdd(newTask)
    setTitle('')
    setError('')

  }

  return (
    <div className='mb-4'>
      <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="text"
        placeholder="Nouvelle tache..."
        value={title}
        onChange={(e)=>{ 
          setTitle(e.target.value)
          if(error) setError('')



        }}

        aria-label="Titre de la nouvelle tache"
        className='flex-1'

      />
      <Button type="submit">Ajouter</Button>



      </form>



{error &&(<p className="text-red-500 text-sm mt-2" role="alert">
  {error}

</p>

)}
    </div>
  )
}










export default TaskForm
import  type {Task} from '@/types/task'
import { Button } from '@/components/ui/button'


type TaskItemProps = {
    task: Task
    onToggle: (id: string) => void // ceci est une fonction qui prend un id de type string et ne retourne rien (void)
    onDelete: (id: string) => void
    onEdit: (id: string, newTitle: string) => void

}

function TaskItem({task, onToggle, onDelete, onEdit}: TaskItemProps)
{
    function handleEdit() {
        const nouveauTitre = prompt('Nouveau titre:', task.title)
        if (nouveauTitre !== null && nouveauTitre.trim() !== '')  // on vérifie que le titre n'est pas vide
            {
                onEdit(task.id, nouveauTitre.trim()) // on appelle la fonction onEdit avec l'id de la tâche et le nouveau titre
            }
        }

        function handleDelete() {
            if (confirm('supprimer "${task.title}" ?')) {
                onDelete(task.id) // on appelle la fonction onDelete avec l'id de la tâche
            }
        }


    return(
        <div className='flex items-center gap-3 p-3 bg-white rounded border hover:shadow-sm transition-shadow'>

            <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)} // on appelle la fonction onToggle avec l'id de la tâche
            className='w-4 h-4 cursor-pointer shrink-0' //  ceci est une classe tailwind qui permet de changer le curseur en pointeur quand on survole la case à cocher
            aria-label={`Marquer'"${task.title}" come ${task.completed ? 'non terminee': 'terminee'}`}
            />


        {/*on utilise une classe conditionnelle pour changer le style du titre de la tâche en fonction de son état (complété ou non) */}



            <span className={task.completed ? 
            'line-through text-slate-400 flex-1 min-w-0 break-words':'flex-1 min-w-0 break-words'}> {/* on utilise la classe flex-1 pour que le titre prenne toute la largeur disponible, min-w-0 pour que le titre ne dépasse pas de son conteneur et break-words pour que le titre se coupe en plusieurs lignes si nécessaire*/}

            {task.title}
            </span>

            <Button variant='outline' onClick={handleEdit}
            aria-label="modifier la tache"                                                  
            className="text-xs px-2">
                ecrire
            </Button>


            <Button variant='outline' onClick={handleDelete}
            aria-label="supprimer la tache"
            className="text-xs px-2">
                supprimer
            </Button> 
            
           
        </div>


    )
}

export default TaskItem
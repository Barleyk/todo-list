import type {Task} from '@/types/task'
import TaskItem from './TaskItem'


type TaskListprops = {
    tasks : Task[]
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, newTitle: string) => void   // ceci est une fonction qui prend un id de type string et un nouveau titre de type string et ne retourne rien (void)
}

function TaskList({tasks, onToggle, onDelete, onEdit}: TaskListprops) {
    if (tasks.length=== 0){ 
        return(
// on affiche un message si la liste de tâches est vide
            <div className="text-center text-slate-500">
                <p className="text-lg font-medium">Aucune tache</p>
                <p className="text-sm mt-1">Ajoutez une tache pour commencer</p>

            </div>
        )
    }
        
    

        return(
            <div className="flex flex-col gap-2"
            role="list" aria-label="Liste de taches"> {/* on utilise le rôle list pour indiquer que c'est une liste de tâches et l'attribut aria-label pour donner un nom à la liste */}
                {tasks.map((task) => (
                    <TaskItem 
                    key={task.id}
                    task={task}         // on passe la tache en props à TaskItem
                    onToggle={onToggle} // on passe la fonction onToggle en props à TaskItem
                    onDelete={onDelete}
                    onEdit={onEdit}
                    />



                )
            )}

        </div>
    )
}
// on exporte le composant TaskList pour pouvoir l'utiliser dans d'autres fichiers
export default TaskList 
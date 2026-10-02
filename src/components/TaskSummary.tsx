
import type {Task} from '@/types/task'

type TaskSummaryProps = {
    tasks: Task[]
}

function TaskSummary({tasks}: TaskSummaryProps) {
    const total = tasks.length
    const restantes = tasks.filter(t => !t.completed).length
    const terminees = tasks.filter(t => t.completed).length


    {/*on utilise la méthode filter pour compter le nombre de tâches restantes et terminées*/}
    return(
    

        <div className="flex gap-4 mb-4 text-sm">
            <div className="flex-1 p-3 bg-white rounded border text-center">
                <p className= "text-2xl font-bold">{total}</p>
                <p className="text-slate-600">taches</p>
            </div>

            <div className="flex-1 p-3 bg-white rounded border text-center">
                <p className= "text-2xl font-bold">{restantes}</p>
                <p className="text-slate-600">restantes</p>
            </div>

            <div className="flex-1 p-3 bg-white rounded border text-center">
                <p className= "text-2xl font-bold">{terminees}</p>
                <p className="text-slate-600">terminees</p>
            </div>
        </div>
    )
}

export default TaskSummary


   
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'



type filterType = 'all' | 'todo' | 'done'


type TaskFiltersProps = {
    filter: filterType
    search: string
    onFilterChange: (newFilter: filterType) => void
    onSearchChange: (newSearch: string) => void
}





function TaskFilters({

    filter,
    search,
    onFilterChange,
    onSearchChange,


        

}: TaskFiltersProps) {
    return(
        <div className="flex flex-col gap-3 mb-4">

            {/*recherche*/}

            <Input
            type="text"
            placeholder="rechercher une tache..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            
            />

            {/*filtres*/}
            
            <div className="flex gap-2">
                <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => onFilterChange('all')}
                >
                    Toutes
                </Button>
        
                <Button 
                variant={filter === 'todo' ? 'default' : 'outline'}
                onClick={() => onFilterChange('todo')}
                >
                    A faire
                </Button>
            {/*on utilise une classe conditionnelle pour changer le style du bouton en fonction du filtre sélectionné*/}
                <Button
                variant={filter === 'done' ? 'default' : 'outline'}
                onClick={() => onFilterChange('done')}
                >
                        terminees
                
                </Button>
            </div>
        </div>
    )
}

 export default TaskFilters
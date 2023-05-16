import Task from '../../types/Task';
import Item from './Item';
import style from './List.module.scss'

interface Props {
    title: string, 
    tarefas: Task[], 
    selecionaTarefa: (task: Task) => void
}

const List = ({title, tarefas, selecionaTarefa}: Props) => {
    return(
        <aside className={style.listaTarefas}>
            <h2>{title}</h2>
            <ul>
                {tarefas.map(tarefa => <Item tarefa={tarefa} key={tarefa.id} selecionaTarefa={(tarefa) => selecionaTarefa(tarefa)} />)}
            </ul>
        </aside>
    )
}

export default List
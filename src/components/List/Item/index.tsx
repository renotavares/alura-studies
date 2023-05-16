import Task from '../../../types/Task'
import style from './Item.module.scss'

interface Props {
    tarefa: Task, 
    selecionaTarefa: (task: Task) => void
}

const Item = ({tarefa, selecionaTarefa}: Props) => {
    return(
        <li className={`${style.item} ${tarefa.selected ? style.itemSelecionado : ''} ${tarefa.completed ? style.itemCompletado : ''}`} onClick={() => !tarefa.completed && selecionaTarefa(tarefa)}>
            <h3>{tarefa.name}</h3>
            <span>{tarefa.time}</span>
            {tarefa.completed && <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}

export default Item
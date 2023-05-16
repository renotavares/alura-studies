import { SetStateAction, useState } from 'react'
import Button from '../Button'
import InputText from '../InputText'
import InputTime from '../InputTime'
import style from './Form.module.scss'
import {v4 as uuidv4} from 'uuid';

const Form = ({onCreateTask}:{onCreateTask:Function}) => {

    const[name, setName] = useState<string>('')
    const[time, setTime] = useState<string>('')

    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onCreateTask({id: uuidv4(), name: name, time: time, selected: false, completed: false})
        setName('')
        setTime('')
    }

    return(
        <form onSubmit={onSave} className={style.novaTarefa}>
            <InputText 
                name="tarefa"
                id="tarefa"
                placeholder="O que você quer estudar"
                label="Tarefa"
                required={true}
                value={name}
                onChange={(value: SetStateAction<string>) => setName(value)}
            />
            <InputTime
                name="tempo"
                id="tempo"
                label="Tempo"
                step="1"
                min="00:00:00"
                max="01:30:00"
                required={true}
                value={time}
                onChange={(value: SetStateAction<string>) => setTime(value)}
            />
            <Button>Adicionar</Button>
        </form>
    )
}

export default Form
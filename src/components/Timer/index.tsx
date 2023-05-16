import { useEffect, useState } from 'react'
import Task from '../../types/Task'
import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'

const Timer = ({selecionado, finalizarTarefa}: {selecionado: Task | undefined, finalizarTarefa: () => void}) => {
    const [time, setTime] = useState<number>()
    useEffect(() => {
        if(selecionado?.time){
            setTime(tempoParaSegundos(selecionado.time))
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0){
                setTime(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock tempo={time} />
            </div>
            <Button type="button" onClick={() => regressiva(time)}>
                Começar
            </Button>
        </div>
    )
}

export default Timer
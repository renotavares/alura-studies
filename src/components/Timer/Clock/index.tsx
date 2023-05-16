import { ajustarRelogio } from '../../../common/utils/time'
import style from './Clock.module.scss'

const Clock = ({tempo = 0}: {tempo: number | undefined}) => {
    const relogio = ajustarRelogio(tempo)
    return(
        <>
            <span className={style.relogioNumero}>{relogio['minutoDezena']}</span>
            <span className={style.relogioNumero}>{relogio['minutoUnidade']}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{relogio['segundoDezena']}</span>
            <span className={style.relogioNumero}>{relogio['segundoUnidade']}</span>
        </>
    )
}

export default Clock
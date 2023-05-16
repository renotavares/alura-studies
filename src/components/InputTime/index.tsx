import style from '../Form/Form.module.scss'

const InputTime = ({label, id, name, step, min, max, required, value, onChange}:{label:string; id: string; name: string, step: string, min: string; max: string; required: boolean, value: string, onChange:Function}) => {
    
    const onWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return(
        <div className={style.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input
                type='time'
                step={step}
                min={min}
                max={max}
                name={name}
                id={id}
                required={required} 
                value={value}
                onChange={onWrite}
            />
        </div>
    )
}

export default InputTime;
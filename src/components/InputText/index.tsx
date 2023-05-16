import style from '../Form/Form.module.scss'

const InputText = ({label, id, name, placeholder, required, value, onChange}: {label: string; id: string; name: string; placeholder: string; required: boolean, value: string, onChange:Function}) => {
    
    const onWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    
    return(
        <div className={style.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input
                type='text'
                name={name}
                id={id}
                placeholder={placeholder}
                required={required} 
                value={value}
                onChange={onWrite}
            />
        </div>
    )
}

export default InputText
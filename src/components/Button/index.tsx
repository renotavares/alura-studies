import React from 'react'
import style from './Button.module.scss'

const Button = ({children, type, onClick} : {children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}) => {
    return(
        <button type={type} onClick={onClick} className={style.botao}>{children}</button>
    )
}

export default Button
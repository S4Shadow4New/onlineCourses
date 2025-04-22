import React from 'react'

interface IButton{
    title: string,
    disabled: boolean,
    onClick?: () => void
    
}

const Button = ({title, disabled, onClick}: IButton)=>{
    return(
        <button disabled={disabled} onClick={onClick}>{title}</button>
    )
}

export default Button

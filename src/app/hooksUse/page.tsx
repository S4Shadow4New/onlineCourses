"use client"
import React, {useCallback, useState } from 'react'

/* type nameValue = 
    |"Jean"
    |"John"
    |'Joseph' */
const Hooks = () => {
    const [value, setValue]= useState/* <nameValue> */("John")
    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event)=>{
        setValue(event.currentTarget.value)
    },[setValue])
    return (
    <div>
        <h1>Utilisation du hooks</h1>
        <input type="text" required value={value}  onChange={handleChange} />
        <p>Valeur obtenu à partir de: input: {value}</p>
    </div>
  )
}

export default Hooks

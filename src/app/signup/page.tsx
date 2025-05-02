"use client"
import React, { useState } from 'react'
import {signUp} from '@/lib/services/auth-service'

const defaultUser =  {
  email: "",
  password: ""
}

const Signup = () => {

    const [user, setUser] = useState<{
      email: string
      password: string
    }>(defaultUser)

    const handleUserChange = (field: string, value: string)=>{
      setUser((previous)=>({...previous, [field]:value}))
    }
    
    const handleSubmit = async (event: React.FormEvent)=>{
      const {email,password} = user
      event.preventDefault()
      try{
        await signUp(email, password)
        console.log("Inscription réussie")
      }catch(error){
        console.error(error)
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' required onChange={(e)=>{handleUserChange("email",e.target.value)}} />
        <label htmlFor="password">Password</label>
        <input type="password" required onChange={(e)=>{handleUserChange("password",e.target.value)}}/>
        <button type='submit'>Soumettre</button>
      </form>
    </div>
  )
}

export default Signup

"use client"
import { signIn } from "@/lib/services/auth-service";
import React, { useState } from "react";

const defaultUser = {
    email: "",
    password: ""
}

const Login = ()=>{
    const [user, setUser] = useState<{
        email:string,
        password:string
    }>(defaultUser)
    const handleChange = (field: string, value: string) =>{
        setUser((previous) =>({...previous, [field]:value })  )
    }
    const handleSubmit = async (event: React.FormEvent) =>{
        console.log(user)
        const {email, password} = user
        event.preventDefault()
        try{
            await signIn(email, password)
        console.log("Connexion réussie")
        }catch(error){
            console.error(error)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required onChange={ event => handleChange("email", event.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required onChange={event => handleChange("password", event.target.value)}/>
                <button type="submit">Connexion</button>
            </form>
        </div>
    )
}

export default Login
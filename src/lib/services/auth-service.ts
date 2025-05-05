import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from '../firebase-config'
import { createUser } from './firestore-service'

export const signUp = async (email: string, password: string, username: string)=>{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await createUser (user.uid, {
        username,
        email: user.email,
        createdAt: new Date().toISOString()
    })
}   

export const signIn = async(email: string, password: string)=>{
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
}

export const logOut = ()=> signOut(auth)
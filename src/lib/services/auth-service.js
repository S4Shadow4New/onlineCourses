import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from '../firebase-config'

export const signUp = async (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = async(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

export const logOut = ()=> signOut(auth)
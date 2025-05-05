import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase-config"


export const createUser =  async (uid: string, data: object)=>{
    try{
        await setDoc(doc(db, "users", uid), data)
    }
    catch(error){
        console.error(`Erreur Firestore : ${error}`)
    }

}

export const getUser = async (uid: string) =>{
    const ref = doc(db, "users", uid)
    const snap = await getDoc(ref)
    return snap.exists()? snap.data() : null
}
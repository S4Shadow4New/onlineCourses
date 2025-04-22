"use client"


import { useReducer } from "react"

interface MyButtonProps{
  title: string,
  disabled: boolean,
}

// Décrit la forme de l'état pour notre réducteur
interface State{
  count: number
}

//décrit les différentes actions susceptibles d’être dispatchées auprès du réducteur.
type CounterAction = 
  | {type: "reset"}
  | {type: "setCount"; value: State["count"]}

  //fournit un type pour l’état initial, qui est aussi le type qu’utilisera useReducer par défaut.
  const initialState: State = {count: 0}

  //définit les types des arguments et de la valeur de retour pour la fonction de réduction.
  function stateReducer(state: State, action: CounterAction): State{
    switch (action.type) {
      case "reset":
        return initialState
      case "setCount":
        return { ...state, count: action.value}
      default:
        throw new Error("Unknown action")
    }
  }


const MyButton = ({title, disabled}: MyButtonProps)=> {
  return(
    <button disabled= {disabled}>{title}</button>
  )
}

export default function MyApp(){
    
    //useState() pour avoir un état initiale par exemple puis modifié cet état
    const [state, dispatch] = useReducer(stateReducer, initialState)

    const addFive = () => dispatch({type: "setCount", value: state.count + 5})
    const reset = () =>dispatch({type: "reset"})

  return(
    <div>
      <h1>Bienvenue dans mon application </h1>
      <MyButton title="Je suis un boutton" disabled={false}/>
      <h2>Veuillez tester ce compteur</h2>

      <p>Compteur : {state.count}</p>
      <button onClick={addFive}>Ajouter 5</button>
      <button onClick={reset}>Reinitialisez</button>
    </div>
  )
}
import React, { createContext, useReducer, useContext, ReactNode } from 'react'
import { IProduct } from '../components/Product';


interface IStoreState{
    products: Array<IProduct>
}
type productAction = 
    | {type:"reset"}
    | {type: "addProduct"; payload: IProduct}
    | {type: "removeProduct"; payload: IProduct}

const initialize: IStoreState = {products:[]}

const stateReducer = (state: IStoreState, action: productAction): IStoreState =>{
  switch (action.type){
    case "reset":
      return initialize
    case "addProduct":
      const {id} = action.payload
      const index = state.products.findIndex((product)=> product.id === id)
      if(index !== -1){
          const updatePlusOne = [...state.products]
          updatePlusOne[index] = {...updatePlusOne[index], productQty: updatePlusOne[index].productQty + 1}   
          return{...state, products: updatePlusOne}
      }else{
          return{...state, products: [...state.products, {...action.payload, productQty: 1}]}
      }
  case "removeProduct":
      const {id: idProductPayload} = action.payload
      const findProductIndex = state.products.findIndex((product)=> product.id === idProductPayload)
      const selectProduct = state.products[findProductIndex]

      if(findProductIndex !== -1 && selectProduct.productQty === 1 ){
          const removeProduct = [...state.products]
          removeProduct.splice(findProductIndex, 1)
          return{...state, products: removeProduct}
      }else if (findProductIndex !== -1 && selectProduct.productQty > 1){
          const discountQty = [...state.products]
          discountQty[findProductIndex] = {...discountQty[findProductIndex], productQty: discountQty[findProductIndex].productQty - 1}
          return {...state, products: discountQty}
      }else{
          return state
      }
    default:
      return state
  }
}

const ProductContext = createContext<{
  state: IStoreState
  addProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
  reset: () => void
} | undefined>(undefined)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const[state, dispatch] = useReducer(stateReducer,initialize)

  const addProduct = (product: IProduct) => dispatch({ type: 'addProduct', payload: product })
  const removeProduct = (product: IProduct) => dispatch({ type: 'removeProduct', payload: product })
  const reset = () => dispatch({ type: 'reset' })
  return (
    <ProductContext.Provider value={{ state, addProduct, removeProduct, reset }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error(`Erreur d'utilisation du useProductContext`)
  return context
}

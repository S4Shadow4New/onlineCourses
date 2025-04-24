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
      const existProduct = state.products.find((product)=> product.id === action.payload.id)
      if(existProduct){
        const updatedProducts = state.products.map((product)=>{
          if(product.id === action.payload.id){
            return {...product, productQty: product.productQty + 1}
          }else{
            return product
          }
        })
        return {...state, products: updatedProducts}
      }else{
        return {
          ...state,
          products:[...state.products, {...action.payload, productQty: 1}]
        }
      }
    case "removeProduct":
      const findProduct = state.products.find((product)=> product.id === action.payload.id)
      if(findProduct  && findProduct.productQty > 1){
        const removeProducts = state.products.map((product) => {
            if(product.id === findProduct.id){
              return {...product, productQty: product.productQty - 1}
            }
            else{
              return product
            }
        })
        return {...state, products: removeProducts}
      }
      else if(findProduct && findProduct.productQty === 1){
        const removeSelectProduct = state.products.filter((product)=> product.id !== action.payload.id)
        return {...state, products: removeSelectProduct}
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

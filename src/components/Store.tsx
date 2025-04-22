import React, { useReducer } from 'react'
import { ShowProduct } from './ShowProduct'
import { IProduct } from './Product';


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

const Store = () => {
  const[state, dispatch] = useReducer(stateReducer,initialize)

  const reset = () => dispatch ({type: "reset"})
  //const addProduct = () => dispatch({type: "addProduct", payload:})
  //const removeProduct = () => dispatch({type: "removeProduct", payload: })
  return (
    <div>
      <p>Panier</p>
        <ShowProduct productList={state.products} />
    </div>
  )
}

export default Store

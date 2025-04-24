"use client"

import { IProduct } from "@/components/Product"
import { ShowProduct } from "@/components/ShowProduct"
import Store from "@/components/Store"
import { ProductProvider } from "@/context/ProductContext"


//Composants produits+ Button add product
// Composant Afficher liste des produits
//Composant panier


const productList: IProduct[] = [
    { id: 1, productName: "Mangue", productQty: 3},
    { id: 2, productName: "Organge", productQty: 0},
    { id: 3, productName: "Bannane", productQty: 5},
  ]


export default function MyApp() {
  return(
    <ProductProvider>

      <div style={{gap: 50,  flexDirection: 'column', display: 'flex'}}>
        <Store />
        <div>

          <p> Product List</p>
          <ShowProduct productList={productList} />
        </div>
      </div>
      
    </ProductProvider>
  )
}
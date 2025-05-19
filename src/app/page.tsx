"use client"

import { IProduct } from "@/components/Product"
import { ShowProduct } from "@/components/ShowProduct"
import Store from "@/components/Store"
import { ProductProvider } from "@/context/ProductContext"
import Image from "next/image"

//Composants produits+ Button add product
// Composant Afficher liste des produits
//Composant panier


const productList: IProduct[] = [
    { id: 1, productName: "Mangue", productQty: 3},
    { id: 2, productName: "Organge", productQty: 0},
    { id: 3, productName: "Bannane", productQty: 5},
  ]

const link = "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"


export default function MyApp() {
  return(
    <ProductProvider>

      <div style={{gap: 50,  flexDirection: 'column', display: 'flex'}}>
        <div className="relative h-96 w-2xl">
          <Image
            src={link}
            alt=""
            fill
          />
        </div>
        <Store />
        <div>

          <p> Product List</p>
          <ShowProduct productList={productList} />
        </div>
      </div>
      
    </ProductProvider>
  )
}
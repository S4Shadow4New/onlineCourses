//"use client"

import Product, { IProduct } from "./Product"



export const ShowProduct = ({productList}: {productList:IProduct[]})=>{
    return(
        <div style={{ display: 'flex', gap: 10}}>
            {
                productList.map((product) => {
                return(
                    <Product key={product.id} id={product.id} productName={product.productName} productQty={product.productQty} />
                )
                })
            }
        </div>
    )
}
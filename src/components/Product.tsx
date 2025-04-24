import { CSSProperties } from "react"
import Button from "./Button"
import { useProductContext } from '../context/ProductContext'

export interface IProduct{
    id?: number,
    productName: string,
    productQty: number
}

const productStyle: CSSProperties = {
    border: `1px solid black`,
    width: 120,
    height:120,
    padding: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}



export default function Product (props:IProduct){
    const {id,productName,productQty} = props
    const { addProduct, removeProduct } = useProductContext()
    return(
        <div style={productStyle}>
            <p>Name: {productName} </p>
            <p>Qte: {productQty} </p>
            <Button disabled={false} title="Add Product" onClick={() => addProduct({ id, productName, productQty })}/>
            <Button disabled={false} title="remove Product" onClick={() => removeProduct({ id, productName, productQty })}/>
        </div>
    )
}
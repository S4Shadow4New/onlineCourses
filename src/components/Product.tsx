import { CSSProperties } from "react"
import Button from "./Button"

export interface IProduct{
    id?: number,
    productName: string,
    productQty: number
}

const productStyle: CSSProperties = {
    border: `1px solid black`,
    width: 100,
    height:100,
    padding: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}



export default function Product (props:IProduct){
    const {id,productName,productQty} = props
    return(
        <div style={productStyle}>
            <p>Name: {productName} </p>
            <p>Qte: {productQty} </p>
            <Button disabled={false} title="Add Product" onClick={()=>({id, productName,productQty})}/>
        </div>
    )
}
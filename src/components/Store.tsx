
import { useProductContext } from '../context/ProductContext'
import Button from './Button'
import { ShowProduct } from './ShowProduct'

const Store = () => {
  const { state, reset } = useProductContext()

  return (
    <div>
      <h2>Panier</h2>
      <Button disabled={false} title="Reset" onClick={reset}/>
      <ShowProduct productList={state.products} />
    </div>
  )
}

export default Store

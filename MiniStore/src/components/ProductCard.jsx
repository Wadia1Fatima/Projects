import { useDispatch } from "react-redux"
import { addToCart } from "../redux/slices/CartSlice"

function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="price">${product.price}</p>

        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
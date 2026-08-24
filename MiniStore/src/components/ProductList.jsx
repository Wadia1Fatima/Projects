import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/slices/ProductsSlice"
import ProductCard from "./ProductCard"

function ProductList() {
  const dispatch = useDispatch()

  const {
    products,
    loading,
    error
  } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return <p className="status">Loading products...</p>
  }

  if (error) {
    return <p className="status">{error}</p>
  }

  return (
    <section className="products-section">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
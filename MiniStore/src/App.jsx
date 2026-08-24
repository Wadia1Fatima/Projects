import { useTheme } from "./context/ThemeContext"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {
  const { darkMode } = useTheme()

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />

      <main>
        <section className="hero">
          <h1>Mini Store</h1>
          <p>Discover products and add your favorites to the cart.</p>
        </section>

        <ProductList />
        <Cart />
      </main>
    </div>
  )
}

export default App
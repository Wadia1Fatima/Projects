import { useSelector } from "react-redux"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
  const { darkMode, toggleTheme } = useTheme()

  const cartItems = useSelector(state => state.cart.items)

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <nav className="navbar">
      <h2>Mini Store</h2>

      <div className="nav-actions">
        <button onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <span className="cart-count">
          Cart: {cartCount}
        </span>
      </div>
    </nav>
  )
}

export default Navbar
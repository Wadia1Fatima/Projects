import { useDispatch, useSelector } from "react-redux"
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/slices/CartSlice"

function Cart() {
  const dispatch = useDispatch()

  const items = useSelector(state => state.cart.items)

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>

                  <div className="quantity">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h3 className="total">
            Total: ${total.toFixed(2)}
          </h3>
        </>
      )}
    </section>
  )
}

export default Cart
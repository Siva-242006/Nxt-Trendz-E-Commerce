import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      for (let i = 0; i < cartList.length; i += 1) {
        totalPrice += cartList[i].quantity * cartList[i].price
      }
      return (
        <div className="cart-summary-container">
          <h1>
            Order Total: <span>Rs {totalPrice}/-</span>
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

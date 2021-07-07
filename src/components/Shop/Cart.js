import React from "react"
import {
  useCart,
  useCartItems,
  useCheckoutUrl,
} from "gatsby-theme-shopify-manager"
import CartItem from "./CartItem"

const Cart = () => {
  const cart = useCart()
  const cartItems = useCartItems()
  const checkoutUrl = useCheckoutUrl()

  return (
    <div>
      {cartItems.length === 0 && <h1>Add items to cart</h1>}

      <ul>
        {cartItems.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </ul>

      {cart?.totalPrice > 0 && (
        <a
          className="bg-black text-white text-center uppercase p-4 font-bureau-wide flex justify-between text-sm"
          href={checkoutUrl}
        >
          <span>${cart?.totalPrice}</span>
          <span>Check Out</span>
        </a>
      )}
    </div>
  )
}

export default Cart

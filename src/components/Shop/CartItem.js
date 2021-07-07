import React from "react"
import { useUpdateItemQuantity } from "gatsby-theme-shopify-manager"

const CartItem = ({ item }) => {
  const updateQuantity = useUpdateItemQuantity()

  const handleQuantityChange = difference => {
    updateQuantity(item.variant.id, item.quantity + difference)
  }

  return (
    <li className="py-2 flex">
      <img
        className="w-16 h-16 object-cover object-center mr-4 flex-shrink-0"
        src={item.variant.image?.src}
        alt={item.variant.image?.altText}
      />
      <div className="">
        {item.title}: {item.variant.title}
        <div className="text-xs flex items-center">
          <p className="mr-4">${item.variant.price}</p>
          <div className="flex">
            <button
              className="w-6 h-6 bg-black text-white"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <div className="w-6 h-6 flex items-center justify-center border">
              {item.quantity}
            </div>
            <button
              className="w-6 h-6 bg-black text-white"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem

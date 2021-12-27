import React from "react"
import Layout from "../components/Layout"
import {
  useCartItems,
  useCheckoutUrl,
  useUpdateItemQuantity,
} from "gatsby-theme-shopify-manager"

import {
  CartLines,
  CartLineSelectedOptions,
  CartLineImage,
  CartLineProductTitle,
  CartLinePrice,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  CartCheckoutButton,
  Link,
  useCart,
} from "@shopify/hydrogen"

const Cart = () => {
  const { lines } = useCart()
  console.log(lines)

  return (
    <Layout>
      {/* {cartItems.length === 0 && <h1>Add items to cart</h1>} */}

      <div className="grid grid-cols-3 p-4 md:p-8">
        <div className="col-span-2 border">
          <CartLines>
            <div className="flex">
              <CartLineImage
                className="w-64 h-64"
                options={{ crop: "center", width: 500, height: 500 }}
              />
              <div className="p-4">
                <CartLineProductTitle className="text-3xl font-bureau-wide" />

                <CartLineSelectedOptions>
                  {({ name, value }) => (
                    <>
                      {name}: {value}
                    </>
                  )}
                </CartLineSelectedOptions>

                <CartLinePrice />
                <div className="flex space-x-4">
                  <div className="">
                    Qty: <CartLineQuantity />
                  </div>

                  <CartLineQuantityAdjustButton adjust="increase">
                    More
                  </CartLineQuantityAdjustButton>
                  <CartLineQuantityAdjustButton adjust="decrease">
                    Less
                  </CartLineQuantityAdjustButton>
                  <CartLineQuantityAdjustButton adjust="remove">
                    Remove
                  </CartLineQuantityAdjustButton>
                </div>
              </div>
            </div>
          </CartLines>
        </div>
        <div className="">
          <CartCheckoutButton>Check Out</CartCheckoutButton>
        </div>
      </div>

      {/* {cart?.totalPrice > 0 && (
        <a
          className="bg-black text-white text-center uppercase p-4 font-bureau-wide flex justify-between text-sm"
          href={checkoutUrl}
        >
          <span>${cart?.totalPrice}</span>
          <span>Check Out</span>
        </a>
      )} */}
    </Layout>
  )
}

export default Cart

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

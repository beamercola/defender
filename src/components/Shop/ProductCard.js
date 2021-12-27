import React from "react"
import Link from "../Link"
import { GatsbyImage } from "gatsby-plugin-image"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"

const ProductCard = ({ product }) => {
  const addItemToCart = useAddItemToCart()

  const handleAddToCart = id => {
    addItemToCart(id, 1)
  }

  return (
    <Link className="block" to={`/products/${product.handle}`}>
      <GatsbyImage
        className="aspect-w-1 aspect-h-1 w-full mb-2"
        image={product.featuredImage.gatsbyImageData}
        alt={product.featuredImage.altText || ""}
      />
      <h2 className="font-bureau-wide uppercase text-lg md:text-2xl font-bold">
        {product.title}
      </h2>

      {parseFloat(product.priceRangeV2.minVariantPrice.amount).toLocaleString(
        "en-US",
        {
          style: "currency",
          currency: "USD",
        }
      )}
    </Link>
  )
}

export default ProductCard

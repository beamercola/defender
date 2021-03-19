import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"

const ProductCard = ({ product }) => {
  const addItemToCart = useAddItemToCart()

  const handleAddToCart = id => {
    addItemToCart(id, 1)
  }

  return (
    <div>
      <GatsbyImage
        className="aspect-w-1 aspect-h-1 w-full"
        image={product.featuredImage.gatsbyImageData}
        alt={product.featuredImage.altText || ""}
      />
      <h2 className="font-bureau-wide uppercase text-2xl py-2 font-bold">
        {product.title}
      </h2>
      <div
        className="prose prose-sm"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
      />
      <p className="">
        Add To Cart:
        {product.variants.map((variant, i) => (
          <button
            className="pl-4 underline"
            onClick={() => handleAddToCart(variant.storefrontId)}
            key={i}
          >
            {variant.title}
          </button>
        ))}
      </p>
    </div>
  )
}

export default ProductCard

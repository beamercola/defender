import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"

const ProductCard = ({ product }) => {
  const addItemToCart = useAddItemToCart()

  const handleAddToCart = id => {
    addItemToCart(id, 1)
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  console.log(product.priceRangeV2.minVariantPrice.amount)
  console.log(
    product.priceRangeV2.minVariantPrice.amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  )

  return (
    <div>
      <GatsbyImage
        className="aspect-w-1 aspect-h-1 w-full mb-2"
        image={product.featuredImage.gatsbyImageData}
        alt={product.featuredImage.altText || ""}
      />
      <h2 className="font-bureau-wide uppercase text-2xl font-bold">
        {product.title}
      </h2>

      {parseFloat(product.priceRangeV2.minVariantPrice.amount).toLocaleString(
        "en-US",
        {
          style: "currency",
          currency: "USD",
        }
      )}
      <div
        className="prose prose-sm"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
      />
      <p className="mt-2">
        Add To Cart:
        {product.variants.map((variant, i) => (
          <button
            className="pl-4 underline disabled:opacity-25 disabled:line-through disabled:cursor-not-allowed"
            disabled={variant.availableForSale}
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

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { SectionHeader } from "../components/Slices"
// import Cart from "../components/Shop/Cart"
import ProductCard from "../components/Shop/ProductCard"
import Link from "../components/Link"
import { useCartLinesTotalQuantity } from "@shopify/hydrogen"

const Shop = ({
  data: {
    allShopifyProduct: { nodes: products },
  },
}) => {
  const qty = useCartLinesTotalQuantity()

  return (
    <Layout cover={<div className="h-40 bg-red" />}>
      <SectionHeader className="px-8 border-t flex justify-between">
        <div className="">SHOP</div>
        <Link className="" to="/cart">
          Cart ({qty})
        </Link>
      </SectionHeader>

      <div className="p-4 md:p-8 grid grid-cols-2 gap-8">
        {products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </Layout>
  )
}

export default Shop

export const query = graphql`
  query ShopPage {
    allShopifyProduct {
      nodes {
        id
        title
        handle
        descriptionHtml
        featuredImage {
          altText
          gatsbyImageData(width: 900, height: 900)
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        variants {
          title
          storefrontId
          availableForSale
        }
      }
    }
  }
`

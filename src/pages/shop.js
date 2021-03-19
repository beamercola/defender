import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { SectionHeader } from "../components/Slices"
import Cart from "../components/Shop/Cart"
import ProductCard from "../components/Shop/ProductCard"

const Shop = ({
  data: {
    allShopifyProduct: { nodes: products },
  },
}) => {
  return (
    <Layout cover={<div className="h-40 bg-red" />}>
      <SectionHeader className="px-8 border-t">SHOP</SectionHeader>

      <div className="md:flex">
        <div className="md:w-3/4 p-4 md:p-8">
          <div className="grid grid-cols-2 gap-8">
            {products.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
          </div>
        </div>
        <div className="md:w-1/4 p-4 md:p-8 md:pl-0">
          <Cart />
        </div>
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

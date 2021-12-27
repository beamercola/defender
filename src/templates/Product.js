import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StickyBox from "react-sticky-box"
import {
  Image,
  ProductProvider,
  ProductTitle,
  ProductDescription,
  SelectedVariantAddToCartButton,
  useProductOptions,
  useProduct,
} from "@shopify/hydrogen"

const Product = () => {
  const { setSelectedVariant, selectedVariant, ...product } = useProduct()
  const { variants } = useProductOptions({
    variants: product.variantsConnection,
  })

  return (
    <Layout animatedHeader={true}>
      <article className="grid grid-cols-2 p-4 md:p-8 gap-12 min-h-[50vh]">
        <div className="">
          {product.imagesConnection.map((image, key) => (
            <Image image={image} options={{ width: 1000 }} key={key} />
          ))}
        </div>
        <div className="">
          <StickyBox className="z-50" offsetTop={96}>
            <form className="grid grid-cols-2 gap-4 md:gap-12">
              <ProductTitle className="text-5xl font-bureau-wide" />

              <div className="row-span-2">
                <ProductDescription className="text-lg" />
              </div>
              <div>
                {parseFloat(
                  product.priceRangeV2.minVariantPrice.amount
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div className="">
                <label>Size</label>
                <select
                  className="border block w-full text-2xl p-4"
                  onChange={e =>
                    setSelectedVariant(
                      variants.find(variant => variant.id === e.target.value)
                    )
                  }
                >
                  {variants.map((variant, key) => (
                    <option value={variant.id} key={key}>
                      {variant.title}
                    </option>
                  ))}
                </select>
              </div>

              <SelectedVariantAddToCartButton
                className="col-span-2 text-4xl p-8 font-bureau-wide uppercase bg-blue text-yellow hover:bg-green disabled:opacity-50"
                disabled={!selectedVariant.availableForSale}
              >
                {selectedVariant.availableForSale ? "Add to cart" : "Sold Out"}
              </SelectedVariantAddToCartButton>
            </form>
          </StickyBox>
        </div>
      </article>
    </Layout>
  )
}

// NOTE: Have to rewrap variants into edges/node
const Wrapper = ({ data: { shopifyProduct: product } }) => {
  return (
    <ProductProvider
      product={{
        ...product,
        variants: { edges: product.variants.map(v => ({ node: { ...v } })) },
      }}
      initialVariantId={product.variants[0].id}
    >
      <Product />
    </ProductProvider>
  )
}

export default Wrapper

export const query = graphql`
  query ProductPageQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      handle
      title
      descriptionHtml
      priceRangeV2 {
        minVariantPrice {
          amount
        }
      }
      images {
        url: src
        altText
      }
      variants {
        id: storefrontId
        title
        availableForSale
        selectedOptions {
          value
          name
        }
      }
    }
  }
`

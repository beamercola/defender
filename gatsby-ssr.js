import * as React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen"
import shopifyConfig from "./shopify.config"

export const wrapRootElement = ({ element }) => (
  <ShopifyProvider shopifyConfig={shopifyConfig}>
    <CartProvider>
      <PreviewStoreProvider>{element}</PreviewStoreProvider>
    </CartProvider>
  </ShopifyProvider>
)

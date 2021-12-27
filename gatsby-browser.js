import SwiperCore, { Pagination } from "swiper"
import * as React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen"
import "./src/css/index.css"
import "tippy.js/dist/tippy.css"
import "swiper/swiper-bundle.min.css"
import shopifyConfig from "./shopify.config"

SwiperCore.use([Pagination])

export const wrapRootElement = ({ element }) => (
  <ShopifyProvider shopifyConfig={shopifyConfig}>
    <CartProvider>
      <PreviewStoreProvider>{element}</PreviewStoreProvider>
    </CartProvider>
  </ShopifyProvider>
)

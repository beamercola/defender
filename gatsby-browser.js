import SwiperCore, { Pagination } from "swiper"
import * as React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import "./src/css/index.css"
import "tippy.js/dist/tippy.css"
import "swiper/swiper-bundle.min.css"

SwiperCore.use([Pagination])

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)

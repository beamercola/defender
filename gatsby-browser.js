import SwiperCore, { Pagination } from "swiper"
import * as React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import "./src/components/layout.css"
import "./node_modules/@glidejs/glide/dist/css/glide.core.min.css"
import "swiper/swiper-bundle.min.css"

SwiperCore.use([Pagination])

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)

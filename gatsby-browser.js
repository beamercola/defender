import SwiperCore, { Pagination } from "swiper"
import * as React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import "./src/components/layout.css"
import "swiper/swiper-bundle.min.css"
import "./node_modules/react-modal-video/css/modal-video.min.css"

SwiperCore.use([Pagination])

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)

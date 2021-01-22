import React from "react"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
const classNames = require("classnames")

const sizeClass = (size = "") => {
  switch (size) {
    case "Large":
      return "w-10/12"
    case "Medium":
      return "w-1/2"
    case "Small":
      return "w-1/3 md:w-1/4"
    default:
      return "w-full"
  }
}

const alignClass = (align = "") => {
  switch (align) {
    case "Center":
      return "justify-center"
    case "Right":
      return "justify-end"
    default:
      return "justify-start"
  }
}

export default ({ align, alt, src, size }) => (
  <Fade bottom>
    <div className={classNames("flex my-12", alignClass(align))}>
      <div className={sizeClass(size)}>
        <img src={src} alt={alt} />
      </div>
    </div>
  </Fade>
)

export const fragments = graphql`
  fragment SliceImage on PrismicArticleBodyImage {
    id
    slice_type
    primary {
      size
      align
      image {
        url
        alt
      }
    }
  }
`

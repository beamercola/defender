import React from "react"
import Content from "./Content"
import Image from "./Image"

const Slices = ({ classNames, slices }) => {
  return slices.map(slice => {
    const key = slice.id

    switch (slice.slice_type) {
      case "content":
        return <Content html={slice.primary.content.html} key={key} />
      case "image":
        console.log(slice.primary)
        return (
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            align={slice.primary.align}
            size={slice.primary.size}
          />
        )
      default:
        return null
    }
  })
}

export default Slices

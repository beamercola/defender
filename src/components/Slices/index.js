import React from "react"
import Content from "./Content"
import Image from "./Image"
import Blockquote from "./Blockquote"
import ArticleGrid from "./ArticleGrid"

const Slices = ({ classNames, slices }) => {
  return slices.map(slice => {
    const key = slice.id

    switch (slice.slice_type) {
      case "content":
        return <Content html={slice.primary.content.html} key={key} />
      case "image":
        return (
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            align={slice.primary.align}
            size={slice.primary.size}
          />
        )
      case "blockquote":
        return <Blockquote html={slice.primary.content.html} />
      case "article_grid":
        return <ArticleGrid items={slice.items} />
      default:
        return null
    }
  })
}

export default Slices

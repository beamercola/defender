import React from "react"
import Content from "./Content"
import Image from "./Image"
import Blockquote from "./Blockquote"
import ArticleGrid from "./ArticleGrid"
import SectionHeader from "./SectionHeader"
import Callout from "./Callout"

export { default as SectionHeader } from "./SectionHeader"

const Slices = ({ className = {}, slices }) => {
  return slices.map(slice => {
    const key = slice.id

    switch (slice.slice_type) {
      case "content":
        return (
          <Content
            className={className.content}
            html={slice.primary.content.html}
            key={key}
          />
        )
      case "image":
        return (
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            align={slice.primary.align}
            size={slice.primary.size}
            key={key}
          />
        )
      case "blockquote":
        return <Blockquote html={slice.primary.content.html} key={key} />
      case "article_grid":
        return <ArticleGrid items={slice.items} key={key} />
      case "section_header":
        return (
          <SectionHeader className="-mx-8 px-8" key={key}>
            {slice.primary.text}
          </SectionHeader>
        )
      case "callout":
        return <Callout key={key} />
      default:
        return null
    }
  })
}

export default Slices

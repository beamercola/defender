import React from "react"
import Content from "./Content"
import Image from "./Image"
import Blockquote from "./Blockquote"
import ArticleGrid from "./ArticleGrid"
import SectionHeader from "./SectionHeader"
import Callout from "./Callout"
import Hero from "./Hero"
import Title from "./Title"

export { default as SectionHeader } from "./SectionHeader"

const Slices = ({ className = {}, slices }) => {
  return slices.map(slice => {
    const key = slice.id

    switch (slice.slice_type) {
      case "hero":
        return <Hero className={className.hero} slice={slice} key={key} />

      case "title":
        return <Title slice={slice} key={key} />

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
        console.log(slice.items)
        return (
          <ArticleGrid
            articles={slice.items.map(i => i.article.document)}
            key={key}
          />
        )
      case "section_header":
        return (
          <SectionHeader className="px-8" key={key}>
            {slice.primary.text}
          </SectionHeader>
        )
      case "callout":
        return <Callout html={slice.primary.content.html} key={key} />
      default:
        return null
    }
  })
}

export default Slices

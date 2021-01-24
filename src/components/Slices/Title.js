import React from "react"
import { graphql } from "gatsby"
import SectionHeader from "./SectionHeader"

const sizeFromPrismic = size => {
  switch (size) {
    case "heading1":
      return "xl"
    default:
      return "xs"
  }
}

const Title = ({ slice }) => {
  const size = slice.primary?.title?.raw[0]?.type

  return (
    <SectionHeader
      className="-mx-8 px-8 border-t border-b"
      size={sizeFromPrismic(size)}
    >
      {slice.primary?.title.text}
    </SectionHeader>
  )
}

export default Title

export const fragments = graphql`
  fragment TitleSlice on PrismicPageBodyTitle {
    id
    slice_type
    primary {
      title {
        text
        raw
      }
    }
  }
`

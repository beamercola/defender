import React from "react"
import { graphql } from "gatsby"
import SectionHeader from "./SectionHeader"

export default ({ slice }) => {
  return (
    <SectionHeader className="-mx-8 px-8 border-t border-b">
      {slice.primary.title.text}
    </SectionHeader>
  )
}

export const fragments = graphql`
  fragment TitleSlice on PrismicPageBodyTitle {
    id
    slice_type
    primary {
      title {
        text
      }
    }
  }
`

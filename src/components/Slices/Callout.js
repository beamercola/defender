import React from "react"
import { graphql } from "gatsby"

export default ({ html }) => (
  <div
    className="lg:sticky lg:left-0 mt-16 lg:w-96 lg:px-16 p-4 lg:-mx-4"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export const fragments = graphql`
  fragment SliceCallout on PrismicArticleBodyCallout {
    id
    slice_type
    primary {
      content {
        html
      }
    }
  }
`

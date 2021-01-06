import React from "react"
import { graphql } from "gatsby"

export default ({ html }) => (
  <blockquote
    className="text-orange-600 py-12 px-8 text-center text-2xl italic border-t-2 border-b-2 border-orange-600 my-24"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export const fragments = graphql`
  fragment SliceBlockquote on PrismicArticleBodyBlockquote {
    id
    slice_type
    primary {
      content {
        html
      }
    }
  }
`

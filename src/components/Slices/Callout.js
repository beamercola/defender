import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"

export default ({ html }) => (
  <Fade direction="up">
    <div
      className="font-mono lg:sticky lg:left-0 mt-16 lg:w-96 lg:px-16 p-4 lg:-mx-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Fade>
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

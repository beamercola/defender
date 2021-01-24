import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"

const Callout = ({ html }) => (
  <div className="lg:sticky lg:left-0 mt-16 lg:w-96 lg:px-16 p-4 lg:-mx-4">
    <Fade direction="up">
      <div className="font-mono" dangerouslySetInnerHTML={{ __html: html }} />
    </Fade>
  </div>
)

export default Callout

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

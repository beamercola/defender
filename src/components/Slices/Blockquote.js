import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"

const Blockquote = ({ html }) => (
  <Fade>
    <blockquote
      className="text-orange py-12 px-8 text-center text-2xl md:text-5xl font-snell border-t-2 border-b-2 border-orange my-24"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Fade>
)

export default Blockquote

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

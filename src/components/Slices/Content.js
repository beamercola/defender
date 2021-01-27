import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"
const classNames = require("classnames")

const Content = ({ className, html }) => (
  <div className={classNames(className, "overflow-hidden")}>
    <Fade>
      <div
        className="prose md:prose-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Fade>
  </div>
)

export default Content

export const fragments = graphql`
  fragment SliceContent on PrismicArticleBodyContent {
    id
    slice_type
    primary {
      content {
        html
      }
    }
  }
`

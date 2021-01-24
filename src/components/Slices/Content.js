import React from "react"
import { graphql } from "gatsby"
const classNames = require("classnames")

const Content = ({ className, html }) => (
  <div className={className}>
    <div
      className="prose prose-lg"
      dangerouslySetInnerHTML={{ __html: html }}
    />
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

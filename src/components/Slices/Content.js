import React from "react"
import { graphql } from "gatsby"
const classNames = require("classnames")

export default ({ className, html }) => (
  <div
    className={classNames("prose prose-lg", className)}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

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

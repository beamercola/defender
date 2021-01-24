import React from "react"
import { graphql } from "gatsby"
const classNames = require("classnames")

const Content = ({ className, html }) => (
  <div
    className={classNames(
      "prose prose-lg",
      "p-4 md:p-8 mx-4 md:mx-8 border-r border-l",
      className
    )}
    dangerouslySetInnerHTML={{ __html: html }}
  />
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

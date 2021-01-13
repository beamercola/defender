import React from "react"
import { withUnpublishedPreview } from "gatsby-source-prismic"

import PageTemplate from "../templates/page"
import ArticleTemplate from "../templates/article"

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <h1>Page not found!</h1>
  </Layout>
)

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: PageTemplate,
    article: ArticleTemplate,
  },
})

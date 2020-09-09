import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"

export const PageTemplate = data => {
  const {
    data: {
      prismicPage: {
        data: { title, body: slices },
      },
    },
  } = data

  return (
    <Layout>
      <Slices slices={slices} />
    </Layout>
  )
}

export default PageTemplate

export const PageTemplateQuery = graphql`
  query PageQuery($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        body {
          ... on PrismicPageBodyArticleGrid {
            id
            slice_type
            items {
              bleed
              article {
                document {
                  ... on PrismicArticle {
                    id
                    uid
                    data {
                      title
                      cover {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Cover from "../components/Cover"
import Slices from "../components/Slices"

const PageTemplate = data => {
  const {
    data: {
      prismicPage: {
        data: { title, body: slices, image },
      },
    },
  } = data

  return (
    <Layout
      animatedHeader={true}
      cover={<Cover className="h-screen" image={image?.url} />}
    >
      <SEO title={title} image={image?.url} />
      <article className="mx-4 md:mx-8 border-l border-r">
        <Slices
          className={{ content: "p-4 md:p-8 text-2xl" }}
          slices={slices}
        />
      </article>
    </Layout>
  )
}

export default withPreview(PageTemplate)

export const PageTemplateQuery = graphql`
  query PageQuery($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        image {
          url
        }
        body {
          ... on PrismicPageBodySectionHeader {
            id
            slice_type
            primary {
              text
            }
          }

          ... on PrismicPageBodyContent {
            id
            slice_type
            primary {
              content {
                html
              }
            }
          }

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
                      teaser {
                        html
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

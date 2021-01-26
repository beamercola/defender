import React from "react"
import { graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
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
    <Layout animatedHeader={true}>
      <SEO title={title || ""} image={image?.url} />
      <article>
        <Slices
          slices={slices}
          className={{
            content: "container lg:py-12 lg:px-32",
            hero: "border-b-0",
          }}
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
          ... on PrismicPageBodyHero {
            ...HeroSlice
          }
          ... on PrismicPageBodyTitle {
            ...TitleSlice
          }
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
                    ...ArticleBase
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

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
        data: { title, body: slices, image, ...page },
      },
    },
  } = data

  return (
    <Layout animatedHeader={true}>
      <SEO
        title={page.seo_title?.text}
        image={page.seo_image?.url}
        description={page.seo_description}
      />
      <article>
        <Slices
          slices={slices}
          className={{
            content: "container px-4 py-8 lg:py-12 lg:px-32",
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
          alt
          url
        }
        seo_title {
          text
        }
        seo_description
        seo_image {
          url(imgixParams: { w: 1200 })
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

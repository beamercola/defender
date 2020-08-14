import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"

export const ArticleTemplate = data => {
  const {
    data: {
      prismicArticle: {
        data: {
          title: { text: title },
          body: slices,
        },
      },
    },
  } = data

  console.log(data)

  return (
    <Layout>
      <article className="px-12">
        <div className="flex">
          <div className="w-1/4">Sidebar</div>
          <div className="w-3/4">
            <h1 className="font-black text-5xl uppercase mb-4">{title}</h1>
            <Slices slices={slices} />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ArticleTemplate

export const ArticleTemplateQuery = graphql`
  query ArticleQuery($uid: String!) {
    prismicArticle(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        body {
          ... on PrismicArticleBodyContent {
            id
            slice_type
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicArticleBodyBlockquote {
            id
            primary {
              content {
                html
              }
            }
            slice_type
          }
          ... on PrismicArticleBodyCallout {
            id
            slice_type
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicArticleBodyImage {
            id
            slice_type
            primary {
              size
              align
              image {
                url
                alt
              }
            }
          }
        }
      }
    }
  }
`

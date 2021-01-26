import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ArticleCard from "../components/ArticleCard"
import Link from "../components/Link"

const Category = ({
  data: {
    allPrismicArticle: { nodes: articles },
  },
}) => {
  return (
    <Layout>
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {articles.map((article, i) => (
            <Link className="block" to={`/${article.uid}`} key={i}>
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Category

export const query = graphql`
  query ArticleCategoryQuery($uid: String!) {
    allPrismicArticle(filter: { data: { category: { uid: { eq: $uid } } } }) {
      nodes {
        uid
        data {
          title
          cover {
            url(imgixParams: { w: 1000 })
          }
          teaser {
            text
          }
          category {
            document {
              ... on PrismicCategory {
                data {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Article/Card"

const Articles = ({
  data: {
    allPrismicArticle: { nodes: articles },
  },
}) => (
  <Layout includeRecent={false}>
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        {articles.map((article, i) => (
          <Card
            article={article}
            styles={{
              category: "mb-2 lg:mb-4",
              image: "w-full h-32 md:h-64 mb-2",
            }}
            key={i}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default Articles

export const query = graphql`
  query AllArticlesQuery {
    allPrismicArticle(filter: { data: { category: { slug: { ne: null } } } }) {
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

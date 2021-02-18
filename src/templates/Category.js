import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Article/Card"

const Category = ({
  data: {
    allPrismicArticle: { nodes: articles },
  },
}) => {
  return (
    <Layout>
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
}

export default Category

export const query = graphql`
  query ArticleCategoryQuery($uid: String!) {
    allPrismicArticle(filter: { data: { category: { uid: { eq: $uid } } } }) {
      nodes {
        ...ArticleBase
      }
    }
  }
`

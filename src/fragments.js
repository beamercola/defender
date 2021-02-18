import { graphql } from "gatsby"
export const ArticleBase = graphql`
  fragment ArticleBase on PrismicArticle {
    uid
    data {
      title
      subtitle {
        text
      }
      cover {
        url(imgixParams: { w: 1200 })
        alt
      }
      teaser {
        html
      }
      category {
        document {
          ... on PrismicCategory {
            uid
            data {
              title
            }
          }
        }
      }
    }
  }
`

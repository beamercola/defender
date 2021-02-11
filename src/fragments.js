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
        url
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

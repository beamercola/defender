export const ArticleBase = graphql`
  fragment ArticleBase on PrismicArticle {
    uid
    data {
      title
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

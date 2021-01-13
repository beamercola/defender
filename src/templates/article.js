import React, { useRef, useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"
import Cover from "../components/Cover"
import { Meta, Section, chunkByType } from "../components/Article"

const readingTime = require("reading-time")

export default ({
  data: {
    prismicArticle: {
      last_publication_date: date,
      data: {
        title,
        cover: { url: cover },
        author: { document: authorDocument },
        category: { document: categoryDocument },
        body: slices,
      },
    },
  },
}) => {
  const { data: { name: author } = {} } = authorDocument || {}
  const {
    data: { title: category },
  } = categoryDocument || {}

  const [readTime, setReadTime] = useState("")
  const contentHtml = useRef()

  useEffect(() => {
    setReadTime(readingTime(contentHtml.current.innerHTML).text)
  }, [])

  const chunks = chunkByType(slices, "callout")

  const coverContainer = (
    <Cover
      className="items-center h-screen justify-center font-black font-bureau-wide text-yellow uppercase text-2xl lg:text-6xl text-center px-8 lg:px-24"
      image={cover}
    >
      {title}
    </Cover>
  )

  return (
    <Layout animatedHeader={false} cover={coverContainer}>
      <div className="bg-yellow font-mono text-center p-3 border-t border-b uppercase">
        {category} | {date} | {author}
      </div>

      <article className="mb-24" ref={contentHtml}>
        <Section callout={<Meta readTime={readTime} />} sticky={false}>
          <h1 className="font-black text-3xl md:text-5xl uppercase my-16">
            {title}
          </h1>
        </Section>

        {chunks?.map(({ callout, slices }, i) => (
          <Section callout={callout} key={i}>
            <Slices slices={slices} />
          </Section>
        ))}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($uid: String!) {
    prismicArticle(uid: { eq: $uid }) {
      last_publication_date(formatString: "MMM D YYYY")
      data {
        title
        cover {
          url
        }

        author {
          document {
            ... on PrismicAuthor {
              data {
                name
              }
            }
          }
        }

        category {
          document {
            ... on PrismicCategory {
              id
              data {
                title
              }
            }
          }
        }

        body {
          ... on PrismicArticleBodyContent {
            ...SliceContent
          }

          ... on PrismicArticleBodyBlockquote {
            ...SliceBlockquote
          }

          ... on PrismicArticleBodyCallout {
            ...SliceCallout
          }

          ... on PrismicArticleBodyImage {
            ...SliceImage
          }
        }
      }
    }
  }
`

import React, { useRef, useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"
import Cover from "../components/Cover"
import { Meta, Section, chunkByType } from "../components/Article"

const readingTime = require("reading-time")

export default data => {
  const {
    data: {
      prismicArticle: {
        last_publication_date: date,
        data: {
          title,
          cover: { url: cover },
          author: { document: { data: { name: author } } = {} },
          category: { document: { data: { title: category } } = {} },
          body: slices,
        },
      },
    },
  } = data
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
    <Layout cover={coverContainer}>
      <div className="bg-yellow font-mono text-center p-3 border-t border-b uppercase">
        {category} | {date} | {author}
      </div>

      <article className="mb-24" ref={contentHtml}>
        <Section callout={<Meta readTime={readTime} />} sticky={false}>
          <h1 className="font-black text-3xl md:text-5xl uppercase my-16">
            {title}
          </h1>
        </Section>

        {chunks.map(({ callout, slices }, i) => (
          <Section callout={callout && <Slices slices={[callout]} />}>
            <Slices slices={slices} />
          </Section>
        ))}
      </article>

      <article className="px-8 md:px-12 relative">
        <div className="-mx-8 md:flex md:items-stretch">
          <div className="md:w-96 flex-shrink-0 px-8 flex flex-col">
            <div className="border-r border-black flex-grow"></div>
          </div>
          <div className="flex-grow px-8 lg:pl-32 pt-16"></div>
        </div>
      </article>
    </Layout>
  )
}

export const ArticleTemplateQuery = graphql`
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

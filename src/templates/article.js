import React, { useRef, useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"
import Cover from "../components/Cover"
const readingTime = require("reading-time")

export const ArticleTemplate = data => {
  const {
    data: {
      prismicArticle: {
        data: {
          title,
          cover: { url: cover },
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
      <div className="bg-yellow font-mono text-center p-3 border-b">
        PHOTO ESSAY | DATE | AUTHOR
      </div>
      <article className="px-8 md:px-12 relative">
        <div className="-mx-8 md:flex md:items-stretch">
          <div className="md:w-96 flex-shrink-0 px-8 flex flex-col">
            <div className="border-b border-black mb-8 py-3 font-mono flex justify-between mr-4">
              <div>{readTime}</div>
              <div className="">FB | TW | EMAIL</div>
            </div>
            <div className="border-r border-black flex-grow"></div>
          </div>
          <div className="flex-grow px-8 lg:pl-32 pt-16">
            <h1 className="font-black text-3xl md:text-5xl uppercase mb-4">
              {title}
            </h1>
            <div ref={contentHtml}>
              <Slices slices={slices} />
            </div>
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
        title
        cover {
          url
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

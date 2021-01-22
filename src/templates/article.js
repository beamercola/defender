import React, { useRef, useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"
import Cover from "../components/Cover"
import { Meta, Section, chunkByType } from "../components/Article"
import ModalVideo from "react-modal-video"

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
  const [watchingVideo, setWatchingVideo] = useState(false)
  const contentHtml = useRef()

  useEffect(() => {
    setReadTime(readingTime(contentHtml.current.innerHTML).text)
  }, [])

  const chunks = chunkByType(slices, "callout")

  return (
    <Layout animatedHeader={false}>
      <Cover className="h-90vh px-8 lg:px-24" image={cover}>
        <h1 className="font-black font-bureau-wide text-yellow uppercase text-2xl lg:text-6xl text-center">
          {title}
        </h1>
        <button
          className="mt-4 text-lg text-yellow"
          onClick={() => setWatchingVideo(true)}
        >
          Play Video
        </button>
      </Cover>

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
          <Section
            callout={
              <div
                className={"prose p-4 my-12 sticky"}
                style={{ top: "10rem" }}
                dangerouslySetInnerHTML={{
                  __html: callout?.primary?.content.html,
                }}
              />
            }
            key={i}
          >
            <Slices slices={slices} />
          </Section>
        ))}
      </article>
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={watchingVideo}
        videoId="492663943"
        onClose={() => setWatchingVideo(false)}
      />
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

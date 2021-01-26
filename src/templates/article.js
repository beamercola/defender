import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"
import Cover from "../components/Cover"
import { Meta, Section, chunkByType } from "../components/Article"
import VideoModal from "../components/VideoModal"

const readingTime = require("reading-time")

const Article = ({
  data: {
    prismicArticle: {
      last_publication_date: date,
      uid,
      data: {
        title,
        video,
        cover: { url: cover },
        author: { document: authorDocument },
        category: { document: categoryDocument },
        body: slices,
      },
    },
  },
}) => {
  const { data: { name: author } = {} } = authorDocument || {}
  const { data: { title: category } = {} } = categoryDocument || {}

  const [readTime, setReadTime] = useState("")
  const [watchingVideo, setWatchingVideo] = useState(false)
  const contentHtml = useRef()

  useEffect(() => {
    setReadTime(readingTime(contentHtml.current.innerHTML).text)
  }, [])

  const chunks = chunkByType(slices, "callout")

  return (
    <Layout animatedHeader={false}>
      <Fade>
        <Cover className="h-90vh" image={cover}>
          {/* <Fade cascade> */}
          <h1 className="font-black font-bureau-wide text-yellow uppercase text-2xl lg:text-6xl text-center">
            {title}
          </h1>
          {video?.embed_url && (
            <button
              className="mt-8 text-lg text-yellow uppercase bg-red py-4 px-8 rounded-full inline-block font-sans"
              onClick={() => setWatchingVideo(true)}
            >
              Play Video
            </button>
          )}
          {/* </Fade> */}
        </Cover>
      </Fade>
      <div className="bg-yellow font-mono text-center p-3 border-t border-b uppercase">
        {category} | {date} | {author}
      </div>
      <article ref={contentHtml}>
        <Section
          callout={<Meta readTime={readTime} title={title} />}
          sticky={false}
        >
          <h1 className="font-black text-3xl md:text-5xl uppercase my-16">
            {title}
          </h1>
        </Section>

        {chunks?.map(({ callout, slices }, i) => (
          <Section
            callout={
              <div
                className={"prose p-4 sticky font-mono py-4"}
                style={{ top: "4rem" }}
                dangerouslySetInnerHTML={{
                  __html: callout?.primary?.content.html,
                }}
              />
            }
            key={i}
          >
            <div className="py-4">
              <Slices slices={slices} />
            </div>
          </Section>
        ))}
      </article>
      <VideoModal
        isOpen={watchingVideo}
        url={video.embed_url}
        close={() => setWatchingVideo(false)}
      />
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ArticleQuery($uid: String!) {
    prismicArticle(uid: { eq: $uid }) {
      last_publication_date(formatString: "MMM D YYYY")
      uid
      data {
        title
        cover {
          url
        }
        video {
          embed_url
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

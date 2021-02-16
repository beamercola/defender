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
        subtitle,
        video,
        teaser,
        video_bg,
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

  let articleMeta = category ? (
    <div className="bg-yellow font-mono text-center p-3 border-t border-b uppercase">
      {category} | {date} | Article by {author}
    </div>
  ) : (
    <div className="bg-yellow font-mono text-center p-3 border-t border-b uppercase">
      From Injustice We Rise
    </div>
  )

  return (
    <Layout animatedHeader={false}>
      <SEO title={title} image={cover} />
      <Fade>
        <Cover
          className="h-90vh text-center"
          image={cover}
          video={video_bg?.url}
        >
          {/* <Fade cascade> */}

          {title !== "About" && (
            <h1 className="font-black font-bureau-wide text-yellow uppercase text-4xl lg:text-8xl">
              {title}
            </h1>
          )}

          {subtitle.text && (
            <h2 className="font-black font-bureau-wide text-yellow uppercase text-2xl mt-2">
              {subtitle.text}
            </h2>
          )}

          <div
            className="text-yellow max-w-lg leading-tight pt-2 uppercase"
            dangerouslySetInnerHTML={{ __html: teaser.html }}
          />

          {video?.embed_url && (
            <button
              className="mt-8 text-lg text-yellow uppercase bg-red py-4 px-8 rounded-full inline-block font-sans"
              onClick={() => setWatchingVideo(true)}
            >
              Play Film
            </button>
          )}
          {/* </Fade> */}
        </Cover>
      </Fade>

      {articleMeta}

      <article ref={contentHtml}>
        {chunks?.map(({ callout, slices }, i) => (
          <Section
            callout={
              i === 0 ? (
                <Meta readTime={readTime} title={title} />
              ) : (
                <div
                  className="prose p-4 sticky font-mono"
                  style={{ top: "4rem" }}
                  dangerouslySetInnerHTML={{
                    __html: callout?.primary?.content.html,
                  }}
                />
              )
            }
            key={i}
            last={i === chunks?.length - 1}
          >
            <div className="py-4">
              {i === 0 && (
                <h1 className="font-black text-3xl md:text-5xl uppercase my-16">
                  {title}
                </h1>
              )}
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
        subtitle {
          text
        }
        cover {
          url
        }
        video {
          embed_url
        }
        video_bg {
          url
        }
        teaser {
          html
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

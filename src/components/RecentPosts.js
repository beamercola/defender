import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SectionHeader } from "./Slices"
import Glide from "@glidejs/glide"
import { useState, useEffect } from "react"

const RecentPosts = () => {
  const {
    allPrismicArticle: { nodes: articles },
  } = useStaticQuery(graphql`
    query RecentArticles {
      allPrismicArticle(
        sort: { fields: last_publication_date, order: DESC }
        limit: 10
      ) {
        nodes {
          data {
            title
            cover {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <SectionHeader className="px-8 border-t">
        <div className="flex w-full justify-between">
          <h2>MOST RECENT STORIES</h2>
          <div className="">prev next</div>
        </div>
      </SectionHeader>
      <div className="flex px-8 -mx-8">
        <Carousel options={{ perView: 4 }}>
          {articles.map(article => (
            <Card
              className="py-8"
              title={article.data.title}
              image={article.data.cover && article.data.cover.url}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default RecentPosts

const Card = ({ className, title, image }) => (
  <div className={`px-8 ${className}`}>
    <div className="flex justify-end">
      <span className="bg-yellow-500 px-8 font-mono text-xs leading-none py-px mb-4 inline-block uppercase font-thin">
        Photo Essay
      </span>
    </div>
    <img className="w-full h-64 bg-black mb-4" />
    <h5 className="text-lg">{title}</h5>
  </div>
)

const Carousel = ({ element = "glide", options, children }) => {
  const [slider] = useState(new Glide(`.${element}`, options))
  useEffect(() => {
    slider.mount()
    return () => slider.destroy()
  }, [])

  return (
    <div className={element}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((slide, index) => {
            return React.cloneElement(slide, {
              key: index,
              className: `${slide.props.className} glide__slide`,
            })
          })}
        </ul>
      </div>
    </div>
  )
}

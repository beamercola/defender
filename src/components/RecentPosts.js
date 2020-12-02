import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SectionHeader } from "./Slices"
import Link from "./Link"
import ArticleCard from "./ArticleCard"
import Carousel from "./Carousel"
import { isMobile } from "react-device-detect"

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
          uid
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
  const itemCount = isMobile ? 2 : 4

  return (
    <div>
      <SectionHeader className="px-8 border-t">
        <div className="flex w-full justify-between">
          <h2>MOST RECENT STORIES</h2>
          <div className="">prev next</div>
        </div>
      </SectionHeader>
      <div className="flex px-8 -mx-8">
        <Carousel options={{ autoPlay: isMobile, perView: itemCount }}>
          {articles.map((article, i) => (
            <Link to={`/${article.uid}`} key={i}>
              <ArticleCard className="py-8 px-8" article={article} />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default RecentPosts

import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { isMobile } from "react-device-detect"
import { Swiper, SwiperSlide } from "swiper/react"
import { Fade } from "react-awesome-reveal"
import { SectionHeader } from "./Slices"
import Link from "./Link"
import ArticleCard from "./ArticleCard"

const RecentPosts = () => {
  const [swiper, setSwiper] = useState(null)
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
      }
    }
  `)

  return (
    <div className="overflow-hidden">
      <SectionHeader className="px-8 border-t flex justify-between items-center">
        <h1 className="flex items-center">MOST RECENT STORIES</h1>
        <div className="flex">
          <button
            className=""
            onClick={() => swiper?.slideTo(swiper.activeIndex - 1)}
          >
            <img className="h-2 rotate-180 transform" src="/arrow.svg" />
          </button>
          <button
            className="ml-2"
            onClick={() => swiper?.slideTo(swiper.activeIndex + 1)}
          >
            <img className="h-2" src="/arrow.svg" />
          </button>
        </div>
      </SectionHeader>
      <div className="pb-12 p-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={isMobile ? 2 : 4}
          onSwiper={s => setSwiper(s)}
        >
          {articles.map((article, i) => (
            <SwiperSlide key={i}>
              <Fade delay={i * 100}>
                <Link className="block group" to={`/${article.uid}`}>
                  <ArticleCard className="" article={article} />
                </Link>
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default RecentPosts

import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Fade } from "./Animations"
import { SectionHeader } from "./Slices"
import Card from "./Article/Card"

const RecentPosts = () => {
  const [swiper, setSwiper] = useState(null)
  const {
    allPrismicArticle: { nodes: articles },
  } = useStaticQuery(graphql`
    query RecentArticles {
      allPrismicArticle(
        sort: { fields: last_publication_date, order: DESC }
        limit: 10
        filter: { data: { category: { slug: { ne: null } } } }
      ) {
        nodes {
          ...ArticleBase
        }
      }
    }
  `)

  return (
    <div className="overflow-hidden">
      <SectionHeader className="px-8 border-t flex justify-between items-center">
        <h1 className="flex items-center">MORE STORIES</h1>
        {articles.length > 4 && (
          <div className="md:flex hidden">
            <button
              className=""
              onClick={() => swiper?.slideTo(swiper.activeIndex - 1)}
            >
              <img
                className="h-2 rotate-180 transform"
                src="/arrow.svg"
                alt="Left Arrow"
              />
            </button>
            <button
              className="ml-2"
              onClick={() => swiper?.slideTo(swiper.activeIndex + 1)}
            >
              <img className="h-2" src="/arrow.svg" alt="Right Arrow" />
            </button>
          </div>
        )}
      </SectionHeader>
      <div className="p-4 md:pb-12 md:p-8">
        <Swiper
          breakpoints={{ 800: { slidesPerView: 4, spaceBetween: 24 } }}
          spaceBetween={16}
          slidesPerView={2}
          onSwiper={s => setSwiper(s)}
        >
          {articles.map((article, i) => (
            <SwiperSlide key={i}>
              <Fade delay={i * 100} triggerOnce={true}>
                <Card
                  article={article}
                  styles={{
                    category: "mb-2 lg:mb-4",
                    image: "w-full h-32 md:h-64 mb-2",
                    title: "text-xs md:text-lg uppercase",
                  }}
                />
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default RecentPosts

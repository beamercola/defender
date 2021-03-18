import React from "react"
import { Link } from "gatsby"
import Highlight from "../Highlight"
import { Fade } from "../Animations"
import Card from "../Article/Card"

const titleClass =
  "font-bureau-wide font-black leading-tight uppercase text-2xl mb-4"

const gridSelector = articles => {
  switch (articles.length) {
    default:
      return <Grid1 articles={articles} />
    case 2:
      return <Grid2 articles={articles} />
    case 3:
      return <Grid3 articles={articles} />
  }
}

const ArticleGrid = ({ articles }) => (
  <div className="container">{gridSelector(articles)}</div>
)

export default ArticleGrid

const Grid1 = ({ articles: [article] }) => {
  if (!article) return null

  if (article.bleed) {
    return <Bleed article={article} />
  }

  return (
    <div className="grid md:grid-cols-2 border-t md:py-12 lg:px-32">
      <div className="bg-white p-3 md:p-8">
        <Card
          article={article}
          styles={{ category: "hidden", title: "hidden" }}
        />
      </div>
      <div className="bg-white p-3 md:p-8">
        <Card
          article={article}
          styles={{
            category: "mb-2 lg:mb-4 mt-0",
            image: "hidden",
            title: titleClass,
          }}
          showTeaser
        />
      </div>
    </div>
  )
}

const Grid2 = ({ items }) => <div></div>

const Grid3 = ({ articles }) => {
  return (
    <div className="bg-black grid md:grid-cols-3" style={{ gap: "2px" }}>
      <div className="bg-white p-3 md:p-8 md:col-span-2 lg:py-12 lg:px-12 xl:px-32">
        <Fade direction="up" triggerOnce duration={500} delay={100}>
          <Card
            article={articles[0]}
            showTeaser
            styles={{
              category: "mb-2 lg:mb-4",
              image: "mb-4 md:h-96 lg:h-128",
              title: titleClass,
            }}
          />
        </Fade>
      </div>

      <div className="bg-white">
        <div className="p-3 md:p-6 md:pt-12 border-b">
          <Fade direction="up" triggerOnce duration={500} delay={200}>
            <Card
              article={articles[1]}
              showTeaser={true}
              styles={{
                categoryWrapper: "justify-start",
                category: "mb-2 lg:mb-4",
                image: "mb-4 md:h-48 lg:h-52 w-full lg:w-2/3",
                title: titleClass,
              }}
            />
          </Fade>
        </div>
        <div className="p-3 md:p-6 md:pt-12">
          <Fade direction="up" triggerOnce duration={500} delay={300}>
            <Card
              article={articles[2]}
              showTeaser={true}
              styles={{
                category: "mb-2 lg:mb-4",
                image: "mb-4 md:h-48 lg:h-52 w-full lg:w-2/3",
                title: titleClass,
              }}
            />
          </Fade>
        </div>
      </div>
    </div>
  )
}

const Bleed = ({ article, uid }) => (
  <Link
    className="block h-80vh pt-12"
    style={{
      backgroundImage: `url(${article.cover?.url})`,
    }}
  >
    <Highlight>{article.category?.document.data.title}</Highlight>
  </Link>
)

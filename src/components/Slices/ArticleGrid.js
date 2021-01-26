import React from "react"
import { Link } from "gatsby"
import Highlight from "../Highlight"
import { Fade } from "react-awesome-reveal"

const classNames = require("classnames")

const gridSelector = items => {
  switch (items.length) {
    default:
      return <Grid1 items={items} />
    case 2:
      return <Grid2 items={items} />
    case 3:
      return <Grid3 items={items} />
  }
}

const ArticleGrid = ({ items }) => (
  <div className="container">{gridSelector(items)}</div>
)

export default ArticleGrid

const Cell = ({
  className,
  imgClassName,
  titleClassName,
  teaserClassName,
  item,
  bleed,
}) => {
  const {
    article: {
      document: { data: article, uid },
    },
  } = item

  return (
    <div className={classNames(className, "group")}>
      <Highlight>{article.category?.document.data.title}</Highlight>
      <Link to={`/${uid}`}>
        <img
          className={classNames(
            imgClassName,
            "bg-black object-cover object-center"
          )}
          src={article.cover?.url}
          alt={article.cover?.alt || ""}
        />
        <div>
          <Title className={classNames(titleClassName, "group-hover:text-red")}>
            {article.title}
          </Title>
          <Teaser className={teaserClassName} html={article.teaser.html} />
        </div>
      </Link>
    </div>
  )
}

const Grid1 = ({ items }) => {
  const {
    bleed,
    article: {
      document: { data: article, uid },
    },
  } = items[0]

  if (bleed) {
    return <Bleed article={article} uid={uid} />
  }

  return (
    <div className="lg:flex group">
      <div className="w-full p-8 lg:w-4/6 lg:p-32">
        <Link to={`/${uid}`}>
          <img
            className="w-full bg-black h-64 mb-4 object-center object-cover"
            src={article.cover?.url}
            alt={article.cover?.alt || ""}
          />
        </Link>
      </div>
      <div className="lg:w-2/6 lg:py-32 lg:pr-12 px-8 pb-8">
        <Link className="group-hover:text-red" to={`/${uid}`}>
          <Title className="text-3xl">
            {items[0].article.document.data.title}
          </Title>
          <Teaser html={article.teaser.html} />
        </Link>
      </div>
    </div>
  )
}

const Grid2 = ({ items }) => <div></div>

const Grid3 = ({ items }) => (
  <div
    className="bg-black md:grid md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3"
    style={{ gap: "2px" }}
  >
    <div className="p-4 md:p-8 bg-white md:row-span-3 md:col-span-2 lg:py-12 lg:px-32">
      <Fade direction="up" triggerOnce duration={500}>
        <Cell
          item={items[0]}
          imgClassName="w-full mb-4 h-64"
          titleClassName="text-2xl"
          teaserClassName="md:text-lg"
        />
      </Fade>
    </div>

    <div className="md:col-span-1 md:row-span-2 bg-white p-6 pt-12">
      <Fade direction="up" triggerOnce duration={500} delay={500}>
        <Cell
          item={items[1]}
          imgClassName="md:w-2/3 md:h-64 mb-4"
          titleClassName="text-xl md:text-2xl"
          teaserClassName="text-sm md:text-base"
        />
      </Fade>
    </div>

    <div className="bg-white px-6 py-12 md:col-span-1 md:row-span-1">
      <Fade direction="up" triggerOnce duration={500}>
        <Cell
          item={items[2]}
          imgClassName="hidden"
          titleClassName="text-xl md:text-2xl"
          teaserClassName="text-sm md:text-base"
        />
      </Fade>
    </div>
  </div>
)

const Title = ({ className, children }) => (
  <h3
    className={`font-bureau-wide font-black leading-tight uppercase ${className}`}
  >
    {children}
  </h3>
)

const Teaser = ({ className, html }) => (
  <div
    className={`leading-snug mt-2 ${className}`}
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
)

const Bleed = ({ article, uid }) => (
  <Link
    className="block h-80vh pt-12"
    to={`/${uid}`}
    style={{
      backgroundImage: `url(${article.cover?.url})`,
    }}
  >
    <Highlight>{article.category?.document.data.title}</Highlight>
  </Link>
)

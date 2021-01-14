import React from "react"
import { Link } from "gatsby"
import Highlight from "../Highlight"
const classNames = require("classnames")

export default ({ items }) => {
  switch (items.length) {
    default:
      return <Grid1 items={items} />
    case 2:
      return <Grid2 items={items} />
    case 3:
      return <Grid3 items={items} />
  }
}

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
    <div className={className}>
      <Highlight>{article.category?.document.data.title}</Highlight>
      <Link to={`/${uid}`}>
        <img
          className={classNames(
            imgClassName,
            "bg-black object-cover object-center"
          )}
          src={article.cover?.url}
        />
        <div>
          <Title className={titleClassName}>{article.title}</Title>
          <Teaser className={teaserClassName} html={article.teaser.html} />
        </div>
      </Link>
    </div>
  )
}

const Grid1 = ({ items, bleed }) => {
  const {
    article: {
      document: { data: article, uid },
    },
  } = items[0]

  return (
    <div className="lg:flex">
      <div className="w-full p-8 lg:w-4/6 lg:p-32">
        <Link to={`/${uid}`}>
          <img
            className="w-full bg-black h-64 mb-4 object-center object-cover"
            src={article.cover?.url}
          />
        </Link>
      </div>
      <div className="lg:w-2/6 lg:py-32 lg:pr-12 px-8 pb-8">
        <Link to={`/${uid}`}>
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
    className={classNames(
      "border-b",
      "md:grid md:grid-rows-3 md:grid-cols-2",
      "lg:grid-cols-3"
    )}
  >
    <Cell
      className={classNames(
        "border-b p-8",
        "md:row-span-3 md:col-span-2",
        "lg:border-r lg:py-12 lg:px-32 lg:border-b-0"
      )}
      item={items[0]}
      imgClassName="w-full mb-4 h-64"
      titleClassName="text-2xl"
      teaserClassName="md:text-lg"
    />

    <Cell
      className={classNames(
        "border-b px-6 py-12",
        "md:col-span-1 md:row-span-2 md:border-b-0 md:border-r",
        "lg:border-r-0"
      )}
      item={items[1]}
      imgClassName="w-2/3 h-64 mb-4 hidden md:block"
      titleClassName="text-xl md:text-2xl"
      teaserClassName="text-sm md:text-base"
    />

    <Cell
      className="md:col-span-1 px-6 py-12"
      item={items[2]}
      imgClassName="hidden"
      titleClassName="text-xl md:text-2xl"
      teaserClassName="text-sm md:text-base"
    />
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

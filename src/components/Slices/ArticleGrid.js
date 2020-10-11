import React from "react"
import { Link } from "gatsby"

const ArticleGrid = ({ items }) => {
  let grid
  switch (items.length) {
    case 1:
      grid = <Grid1 items={items} />
      break
    case 2:
      grid = <Grid2 items={items} />
      break
    case 3:
      grid = <Grid3 items={items} />
      break
  }

  return <div className="">{grid}</div>
}

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
    <div className={className}>
      <span className="highlight">Photo Essay</span>
      <Link to={`/articles/${uid}`}>
        <img className={`bg-black ${imgClassName}`} src="" />
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
    <div className="md:flex">
      <div className="md:w-4/6 md:p-32">
        <Link to={`/articles/${uid}`}>
          <img className="w-full bg-black h-64 mb-4" src="" />
        </Link>
      </div>
      <div className="md:w-2/6 md:py-32 md:pr-12 px-8 pb-8">
        <Link to={`/articles/${uid}`}>
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
  <div className="md:flex md:items-stretch border-b">
    <Cell
      className="md:w-4/6 p-8 md:py-12 md:px-32 border-b md:border-b-0 md:border-r"
      item={items[0]}
      imgClassName="w-full mb-4 h-64"
      titleClassName="text-2xl"
      teaserClassName="md:text-lg"
    />

    <div className="md:w-2/6 flex flex-col">
      <Cell
        className="border-b px-6 py-12"
        item={items[1]}
        imgClassName="w-2/3 h-64 mb-4 hidden md:block"
        titleClassName="text-xl md:text-2xl"
        teaserClassName="text-sm md:text-base"
      />

      <Cell
        className="px-6 py-12"
        item={items[2]}
        imgClassName="hidden"
        titleClassName="text-xl md:text-2xl"
        teaserClassName="text-sm md:text-base"
      />
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

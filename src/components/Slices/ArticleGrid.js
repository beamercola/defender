import React from "react"

const ArticleGrid = ({ items }) => {
  let grid
  switch (items.length) {
    case 1:
      grid = <Grid1 items={items} />
      break
    case 2:
      grid = "Hello"
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
  const article = item.article.document.data

  return (
    <div className={className}>
      <span className="highlight">Photo Essay</span>
      <img className={`bg-black ${imgClassName}`} src="" />
      <div>
        <Title className={titleClassName}>{article.title}</Title>
        <Teaser html={article.teaser.html} />
      </div>
    </div>
  )
}

const Grid1 = ({ items, bleed }) => (
  <div className="flex">
    <div className="w-4/6 p-32">
      <img className="w-full bg-black h-64 mb-4" src="" />
    </div>
    <div className="w-2/6 py-32 pr-12">
      <Title className="text-3xl">{items[0].article.document.data.title}</Title>
      <Teaser html={items[0].article.document.data.teaser.html} />
    </div>
  </div>
)

const Grid2 = ({ items }) => <div></div>

const Grid3 = ({ items }) => (
  <div className="flex items-stretch border-b">
    <Cell
      className="w-4/6 px-32 py-12 border-r"
      item={items[0]}
      imgClassName="w-full mb-4 h-64"
      titleClassName="text-2xl"
    />

    <div className="w-2/6 flex flex-col">
      <Cell
        className="border-b px-6 py-12"
        item={items[1]}
        imgClassName="w-2/3 h-64 mb-4"
        titleClassName="text-2xl"
      />

      <Cell
        className="px-6 py-12"
        item={items[2]}
        imgClassName="hidden"
        titleClassName="text-2xl"
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
    className={`text-xl leading-snug mt-2 ${className}`}
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
)

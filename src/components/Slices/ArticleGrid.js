import React from "react"

const ArticleGrid = ({ items }) => {
  console.log(items)
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

const Grid1 = ({ items }) => (
  <div className="flex">
    <div className="w-4/6 p-32">
      <img className="w-full bg-black h-64 mb-4" src="" />
    </div>
    <div className="w-2/6 py-32 pr-12">
      <Title>{items[0].article.document.data.title}</Title>
    </div>
  </div>
)

const Grid2 = ({ items }) => <div></div>

const Grid3 = ({ items }) => (
  <div className="flex items-stretch border-b">
    <div className="w-1/2 px-24 py-12 border-r">
      <img className="w-full bg-black h-64 mb-4" src="" />
      <Title>{items[0].article.document.data.title}</Title>
    </div>
    <div className="w-1/2 flex flex-col bg-yellow-100">
      <div className="bg-red-100 border-b p-12">
        <img className="w-full bg-black h-64 mb-4" src="" />
        <Title>{items[1].article.document.data.title}</Title>
      </div>
      <div className="h-1/3 p-12">
        <div className="flex">
          <img className="w-full bg-black h-32 mr-4" src="" />
          <Title>{items[1].article.document.data.title}</Title>
        </div>
      </div>
    </div>
  </div>
)

const Title = ({ children }) => (
  <h3 className="font-bureau-wide font-black text-3xl leading-none uppercase">
    {children}
  </h3>
)

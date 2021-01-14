import React from "react"
import Highlight from "./Highlight"

export default ({ className, article }) => {
  console.log(article)
  return (
    <div className={`${className}`}>
      <div className="flex justify-end">
        <Highlight>{article.category?.document.data.title}</Highlight>
      </div>
      <img
        className="w-full h-32 md:h-64 bg-black mb-1 object-cover"
        src={article.data.cover?.url}
      />
      <h5 className="text-xl">{article.data.title}</h5>
    </div>
  )
}

import React from "react"
import Highlight from "./Highlight"

const ArticleCard = ({ className, article }) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-end">
        <Highlight>{article.data.category?.document?.data?.title}</Highlight>
      </div>
      <img
        className="w-full h-32 md:h-64 bg-black mb-1 object-cover"
        src={article.data.cover?.url}
        alt={article.data.cover?.alt || ""}
      />
      <h5 className="text-xl group-hover:text-red">{article.data.title}</h5>
    </div>
  )
}

export default ArticleCard

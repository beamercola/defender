import React from "react"
import Highlight from "./Highlight"

export default ({ className, article }) => (
  <div className={`${className}`}>
    <div className="flex justify-end">
      <Highlight>Photo Essay</Highlight>
    </div>
    <img className="w-full h-32 md:h-64 bg-black mb-4" />
    <h5 className="text-lg">{article.title}</h5>
  </div>
)

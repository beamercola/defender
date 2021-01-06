import React from "react"

export default ({ readTime }) => (
  <div className="border-b border-black mb-8 py-3 font-mono flex justify-between px-4">
    <div>{readTime}</div>
    <div className="">FB | TW | EMAIL</div>
  </div>
)

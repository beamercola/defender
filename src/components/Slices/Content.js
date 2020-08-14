import React from "react"

const Content = ({ html }) => (
  <div className="text-4xl" dangerouslySetInnerHTML={{ __html: html }} />
)

export default Content

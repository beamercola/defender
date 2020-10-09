import React from "react"

const Content = ({ className, html }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default Content

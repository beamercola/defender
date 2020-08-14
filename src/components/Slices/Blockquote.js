import React from "react"

const Blockquote = ({ html }) => (
  <blockquote dangerouslySetInnerHTML={{ __html: html }} />
)

export default Blockquote

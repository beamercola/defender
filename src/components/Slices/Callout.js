import React from "react"

const Callout = ({ html }) => (
  <div
    className="lg:sticky lg:left-0 mt-16 lg:w-96 lg:px-16 p-4 lg:-mx-4"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export default Callout

import React from "react"

const Highlight = ({ children }) => (
  <span className="bg-yellow px-8 font-mono text-xs leading-none py-1 mb-4 inline-block uppercase font-thin">
    {children}
  </span>
)

export default Highlight

import React from "react"
const classNames = require("classnames")

const Highlight = ({ className, children }) => (
  <span
    className={classNames(
      className,
      "bg-yellow px-8 font-mono text-xs leading-none py-1 inline-block uppercase font-thin"
    )}
  >
    {children}
  </span>
)

export default Highlight

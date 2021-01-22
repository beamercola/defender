import React from "react"
const classNames = require("classnames")

export default ({ className, children }) => (
  <div
    className={classNames(
      className,
      "h-12 flex justify-between items-center font-mono border-b bg-white",
      "md:text-xs"
    )}
  >
    {children}
  </div>
)

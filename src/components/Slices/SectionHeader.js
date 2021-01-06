import React from "react"
const classNames = require("classnames")

export default ({ className, children }) => (
  <div
    className={classNames(
      className,
      "h-12 flex items-center font-mono border-b bg-white",
      "md:h-8 md:text-xs"
    )}
  >
    {children}
  </div>
)

import React from "react"
const classNames = require("classnames")

export default ({ className, children, size }) => (
  <div
    className={classNames(
      className,
      "flex justify-between items-center font-mono border-b bg-white",
      { "h-12 md:text-xs": !size }
    )}
  >
    {children}
  </div>
)

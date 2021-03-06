import React from "react"
const classNames = require("classnames")

const sizeClass = size => {
  switch (size) {
    default:
      return "py-2 md:text-sm"
    case "xl":
      return "py-4 md:text-2xl font-bureau-wide uppercase text-center font-bold"
  }
}

const SectionHeader = ({ className, children, size = "xs" }) => (
  <div
    className={classNames(
      className,
      "font-mono border-b bg-white",
      sizeClass(size)
    )}
  >
    {children}
  </div>
)

export default SectionHeader

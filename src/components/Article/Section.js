import React from "react"
var classNames = require("classnames")

export default ({ callout, children, sticky = true }) => {
  return (
    <div className="md:flex md:items-stretch">
      <div className="md:w-80 flex-shrink-0">{callout}</div>
      <div className="flex-grow border-l px-5 md:px-16">{children}</div>
    </div>
  )
}

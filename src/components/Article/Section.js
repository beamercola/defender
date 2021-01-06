import React from "react"
var classNames = require("classnames")

export default ({ callout, children, sticky = true }) => (
  <div className="flex items-stretch">
    <div className="w-1/4">
      <div className={classNames({ sticky: sticky })} style={{ top: "8rem" }}>
        {callout}
      </div>
    </div>
    <div className="w-3/4 border-l px-16">{children}</div>
  </div>
)

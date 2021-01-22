import React from "react"
const classNames = require("classnames")

export default ({ className, image, children }) => {
  if (!image) return null
  return (
    <div
      className={classNames(className, "relative bg-cover bg-center")}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div
        className={classNames(
          "flex flex-col items-center justify-center absolute inset-0 z-10 pt-32"
        )}
      >
        {children}
      </div>
      <div className="absolute z-0 inset-0 bg-black bg-opacity-50" />
    </div>
  )
}

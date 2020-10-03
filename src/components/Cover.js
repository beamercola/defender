import React from "react"

const Cover = ({ className, image, children }) => {
  return (
    <div
      className={`cover bg-cover bg-center flex px-24 ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      {children}
    </div>
  )
}

export default Cover

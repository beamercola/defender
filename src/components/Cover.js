import React from "react"

export default ({ className, image, children }) => {
  if (!image) return null
  return (
    <div
      className={`cover bg-cover bg-center relative ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      {children}
      <div className="absolute z-0 inset-0 bg-black bg-opacity-50"></div>
    </div>
  )
}

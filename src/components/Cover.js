import React from "react"

export default ({ className, image, children }) => {
  if (!image) return null
  return (
    <div
      className={`cover bg-cover bg-center flex ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      {children}
    </div>
  )
}

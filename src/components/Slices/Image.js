import React from "react"

const Image = ({ align, alt, src, size }) => {
  let classNames = []
  let imageClassNames = []

  switch (size) {
    case "Large":
      imageClassNames.push("w-10/12")
      break
    case "Medium":
      imageClassNames.push("w-1/2")
      break
    case "Small":
      imageClassNames.push("w-1/4")
      break
    default:
      imageClassNames.push("w-full")
      break
  }

  switch (align) {
    case "Center":
      classNames.push("justify-center")
      break
    case "Right":
      classNames.push("justify-end")
      break
    default:
      classNames.push("justify-start")
      break
  }

  return (
    <div className={`flex my-12 ${classNames.join(" ")}`}>
      <div className={`${imageClassNames.join(" ")}`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default Image

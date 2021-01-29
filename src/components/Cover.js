import React from "react"
const classNames = require("classnames")

const Cover = ({ className, image, children, video }) => {
  if (!image) return null
  return (
    <div
      className={classNames(
        className,
        "relative bg-cover bg-center overflow-hidden"
      )}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div
        className={classNames(
          "flex flex-col items-center justify-center absolute inset-0 z-20 pt-32 px-8 lg:px-12"
        )}
      >
        {children}
      </div>
      <div className="absolute z-10 inset-0 bg-black bg-opacity-50" />
      {video && (
        <video
          className="absolute inset-0 z-0 object-cover object-center h-full w-full bg-black"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default Cover

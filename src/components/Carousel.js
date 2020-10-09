import React from "react"
import { useState, useEffect } from "react"
import Glide from "@glidejs/glide"

const Carousel = ({ element = "glide", options, children }) => {
  const [slider] = useState(new Glide(`.${element}`, options))
  useEffect(() => {
    slider.mount()
    return () => slider.destroy()
  }, [])

  return (
    <div className={element}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((slide, index) => {
            return React.cloneElement(slide, {
              key: index,
              className: `${slide.props.className} glide__slide`,
            })
          })}
        </ul>
      </div>
    </div>
  )
}

export default Carousel

import React, { useRef, useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import VizSensor from "react-visibility-sensor"

/**
 *
 * @param {*} props
 *
 */

const Fade = props => {
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(false)
  // default FadeInAnimation is set
  const fadeIn = !props.fadeOut ? props.fadeIn || true : false
  const fadeOut = props.fadeOut || false
  const defaultTransition = props.transition || {}
  const defaultInitial = props.initial || {}
  const defaultAnimate = props.animate || {}
  const partialVisibility = props.partialVisibility || true

  const fadeVariant = () => {
    return {
      hidden: {
        opacity: 0,
        y: 30,
        ...defaultInitial,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 2.2,
          y: 0,
          ...defaultTransition,
        },
        ...defaultAnimate,
      },
    }
  }

  useEffect(() => {
    if (isVisible && fadeIn) {
      controls.start("visible")
    } else if (isVisible && fadeOut) {
      controls.start("hidden")
    }
  }, [isVisible])

  return (
    <div>
      <VizSensor
        delayedCall
        // minTopValue={100}
        partialVisibility={partialVisibility}
        onChange={isVisible => {
          setIsVisible(isVisible)
        }}
      >
        <div>
          <motion.div
            variants={fadeVariant()}
            initial={fadeIn ? "hidden" : "visible"}
            animate={controls}
          >
            {props.children}
          </motion.div>
        </div>
      </VizSensor>
    </div>
  )
}

export default Fade

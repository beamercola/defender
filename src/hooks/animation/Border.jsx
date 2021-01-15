import React, { useRef, useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import VizSensor from "react-visibility-sensor"

/**
 *
 * @param {*} props
 *
 */

const Border = props => {
  const controls = useAnimation()
  const childRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  const defaultBorder = {
    bottom: props.bottom,
    top: props.top,
    left: props.left,
    right: props.right,
  }
  const defaultTransition = props.transition || {}
  const defaultInitial = props.initial || {}
  const defaultAnimate = props.animate || {}
  const partialVisibility = props.partialVisibility || false
  //   this margin is only used for left and right border
  const leftMargin = props.leftMargin || 0
  const rightMargin = props.rightMargin || 0
  const topMargin = props.topMargin || 0

  const borderVariants = () => {
    return {
      hiddenyAnimation: {
        minWidth: 1,
        height: 0,
        backgroundColor: "black",
        ...defaultInitial,
      },
      hiddenxAnimation: {
        width: 0,
        height: 1,
        backgroundColor: "black",
        ...defaultInitial,
      },
      visiblexAnimation: {
        width: "100%",
        transition: {
          duration: 2,
          ...defaultTransition,
        },
        ...defaultAnimate,
      },
      visibleyAnimation: {
        minHeight: "100%",
        transition: {
          duration: 2,
          ...defaultTransition,
        },
        ...defaultAnimate,
      },
    }
  }

  useEffect(() => {
    if (isVisible && (defaultBorder.bottom || defaultBorder.top)) {
      controls.start("visiblexAnimation")
    } else if (isVisible && (defaultBorder.left || defaultBorder.right)) {
      console.log("visibleY Animation")
      controls.start("visibleyAnimation")
    }
  }, [isVisible])

  return (
    <div>
      <VizSensor
        partialVisibility={partialVisibility}
        minTopValue={10}
        delayedCall
        onChange={isVisible => {
          console.log("visible1 ==== ", isVisible)
          setIsVisible(isVisible)
        }}
      >
        <div>
          {defaultBorder.top && (
            <motion.div
              variants={borderVariants()}
              initial={"hiddenxAnimation"}
              animate={controls}
            ></motion.div>
          )}

          <div style={{ position: "relative", overflow: "hidden" }}>
            {props.children}

            {/* left border */}

            {defaultBorder.left && (
              <motion.div
                style={{
                  position: "absolute",
                  top: topMargin,
                  left: defaultBorder.left ? leftMargin : undefined,
                }}
                variants={borderVariants()}
                initial={"hiddenyAnimation"}
                animate={controls}
              ></motion.div>
            )}

            {/* right border */}

            {defaultBorder.right && (
              <motion.div
                style={{
                  position: "absolute",
                  top: topMargin,
                  right: rightMargin,
                }}
                variants={borderVariants()}
                initial={"hiddenyAnimation"}
                animate={controls}
              ></motion.div>
            )}
          </div>

          {defaultBorder.bottom && (
            <motion.div
              variants={borderVariants()}
              initial={"hiddenBottomAnimation"}
              animate={controls}
            ></motion.div>
          )}
        </div>
      </VizSensor>
    </div>
  )
}

export default Border

import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ScrollToTop = () => {
  const { scrollYProgress } = useViewportScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <button
      className="w-12 h-12 md:w-16 md:h-16 fixed left-6 bottom-6"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <motion.img
        src="/frominjusticewerise.png"
        alt="Back to top"
        style={{ rotate: rotate, zIndex: 111111 }}
      />
    </button>
  )
}

export default ScrollToTop

import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ScrollToTop = () => {
  const { scrollYProgress } = useViewportScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <button
      className="fixed left-4 bottom-4"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <motion.img
        className="object-contain w-12 h-12 md:w-24 md:h-24"
        src="/frominjusticewerise.png"
        alt="Back to top"
        style={{ rotate: rotate, zIndex: 111111 }}
      />
    </button>
  )
}

export default ScrollToTop

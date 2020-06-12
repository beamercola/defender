import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"
import { motion, useTransform, useViewportScroll } from "framer-motion"

const Header = () => {
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [0, 300], [250, 80])
  const textScale = useTransform(scrollY, [0, 300], [1.4, 1])

  return (
    <div className="fixed top-0 inset-x-0 px-8 mx-auto max-w-5xl z-50">
      <motion.header
        className="border-b-2 border-black w-full"
        style={{
          height: scale,
        }}
      >
        <img className="h-full mx-auto object-contain" src={Logo} />
      </motion.header>
      <div className="flex flex-col mt-2 items-center justify-between md:flex-row">
        <strong className="text-xs font-bold block uppercase">
          Presented by the Adachi Fund
        </strong>
        <motion.p
          className="font-snell text-lg lg:text-2xl hopeless pl-4"
          style={{
            scale: textScale,
          }}
        >
          Hopelessness is the Enemy of Justice
        </motion.p>
      </div>
    </div>
  )
}

export default Header

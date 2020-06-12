import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"
import Hopeless from "../images/hopeless_text.svg"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import { isBrowser } from "react-device-detect"

const Header = () => {
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [0, 300], [250, 80])
  const textScale = useTransform(scrollY, [0, 300], [1.5, 1])

  return (
    <div className="fixed top-0 inset-x-0 px-8 mx-auto max-w-5xl z-50">
      <motion.header
        className="border-b-2 border-black w-full"
        style={{
          height: scale,
        }}
      >
        <Link className="" to="/">
          <img className="h-full mx-auto object-contain" src={Logo} />
        </Link>
      </motion.header>
      <div className="flex flex-col mt-2 items-center justify-between md:flex-row">
        <strong className="text-xs font-bold block uppercase">
          Presented by the Adachi Fund
        </strong>
        <motion.img
          className="h-6 mx-auto md:mx-0 lg:h-8"
          src={Hopeless}
          alt="Hopeless is the Enemy of Justice"
          style={{
            scale: textScale,
            transformOrigin: isBrowser ? "top right" : "top center",
          }}
        />
      </div>
    </div>
  )
}

export default Header

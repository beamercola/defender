import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"
import { motion, useTransform, useViewportScroll } from "framer-motion"

const Header = () => {
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [0, 200], [200, 80])

  return (
    <motion.header
      className="border-b-2 border-black fixed top-0 inset-x-0 xl:mx-24"
      style={{
        height: scale,
      }}
    >
      <Link className="" to="/">
        <img className="h-full mx-auto object-contain" src={Logo} />
      </Link>
    </motion.header>
  )
}

export default Header

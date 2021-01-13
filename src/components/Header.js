import React, { useEffect, useState } from "react"
import Link from "./Link"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default ({ animated, toggleMenu }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [0, 200], [200, 100])
  const perc = useTransform(scale, v => `${v}%`)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <motion.header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          className="flex-grow flex items-center justify-center"
          style={{ height: perc }}
        >
          <div className="flex h-full items-end p-4">
            <Link className="h-full" to="/">
              <img
                className="mx-auto h-full"
                src="/logotype.svg"
                // style={{ height: scale }}
              />
            </Link>
            <p className="text-yellow">Vol 1</p>
          </div>
        </motion.div>
        <div className="z-50">
          <nav className="border-t border-b border-yellow text-yellow text-2xl text-center font-snell h-8 w-screen">
            {pageIsVisible && (
              <Ticker>
                {() => (
                  <div className="flex w-screen">
                    <button className="flex-grow" onClick={toggleMenu}>
                      Menu
                    </button>
                    <Link
                      className="flex-grow"
                      to="https://wearedefender.wedid.it/"
                    >
                      Donate
                    </Link>
                    <Link className="flex-grow" to="/shop">
                      Shop
                    </Link>
                  </div>
                )}
              </Ticker>
            )}
          </nav>
        </div>
      </motion.header>
    </PageVisibility>
  )
}

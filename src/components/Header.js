import React, { useEffect, useState } from "react"
import Link from "./Link"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"
import StickyBox from "react-sticky-box"
const classNames = require("classnames")

export default ({ animated = false, toggleMenu }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const [stuck, setStuck] = useState(false)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <>
      <header className="bg-red">
        <Link className="h-full" to="/">
          <img className="mx-auto h-full" src="/logotype.svg" />
        </Link>
      </header>

      <StickyBox
        className="z-50"
        offsetTop={0}
        onChangeMode={(o, n) => console.log(o, n)}
      >
        <nav
          className={classNames(
            "border-t border-b border-yellow text-yellow text-2xl text-center font-snell w-screen py-1",
            stuck ? "bg-black" : "bg-red"
          )}
        >
          <PageVisibility onChange={handleVisibilityChange}>
            {pageIsVisible && (
              <Ticker direction="toRight" offset="100%">
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
          </PageVisibility>
        </nav>
      </StickyBox>
    </>
  )
}

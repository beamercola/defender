import React, { useState } from "react"
import Link from "./Link"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"
import StickyBox from "react-sticky-box"
const classNames = require("classnames")

const Header = ({ animated = false, toggleMenu }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const [stuck, setStuck] = useState(false)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <>
      <header className="bg-red relative">
        <div
          className={classNames(
            "text-yellow text-3xl text-center  w-screen py-1 justify-end flex relative",
            stuck ? "bg-black" : "bg-red"
          )}
        >
          <p className="flex-grow text-center font-snell">
            From Injustice We Rise
          </p>
          <p className="text-yellow text-lg absolute right-3">VOLUME 00</p>
        </div>
        <Link className="h-full" to="/">
          <img className="mx-auto h-full" src="/logotype.svg" alt="Defender" />
        </Link>
      </header>

      <StickyBox
        className="z-50"
        offsetTop={0}
        // onChangeMode={(o, n) => console.log(o, n)}
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
                    <Link className="flex-grow" to="/about">
                      About
                    </Link>
                    <a
                      className="flex-grow"
                      to="https://adachiproject.wedidit.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Donate
                    </a>
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

export default Header

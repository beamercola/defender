import React from "react"
import Link from "./Link"
import { Fade } from "react-awesome-reveal"
const classNames = require("classnames")

const primary = [
  { label: "Home", to: "/", className: "bg-red" },
  { label: "About", to: "/about", className: "bg-orange" },
  {
    label: "All Stories",
    to: "/stories",
    className: "bg-blue",
  },
  {
    label: "Donate",
    to: "https://adachiproject.wedid.it",
    className: "bg-green",
  },
]

const secondary = [
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
  { label: "Instagram", to: "https://instagram.com/wearedefender" },
  { label: "Twitter", to: "https://twitter.com/_wearedefender" },
]

const Menu = ({ toggle, open }) => {
  return (
    <div
      className={classNames(
        "menu-bg bg-yellow bg-opacity-80 fixed inset-0 flex items-stretch z-50 cursor-pointer transition-all duration-300",
        { open: open }
      )}
      onClick={toggle}
    >
      <div
        className={classNames(
          "menu bg-white w-5/6 md:w-1/3 flex flex-col cursor-auto border-r",
          "duration-300 transition-all",
          { open: open }
        )}
        onClick={e => e.stopPropagation()}
        style={{ transform: "translate3d(-100vw, 0, 0)" }}
      >
        <div className="bg-yellow border-b px-12 py-4">
          <img className="h-32" src="/defender-d.svg" alt="Defender" />
        </div>
        {primary.map((link, i) => (
          <Link
            className={classNames(
              link.className,
              "block text-yellow font-bureau-wide text-2xl py-4 px-6 md:px-12 font-bold uppercase border-b",
              "hover:text-white hover:bg-black"
            )}
            to={link.to}
            key={i}
          >
            <Fade delay={i * 100}>{link.label}</Fade>
          </Link>
        ))}
        {secondary.map((link, i) => (
          <Link
            className="block py-3 px-6 md:px-12 font-snell text-2xl border-b hover:bg-black hover:text-white"
            to={link.to}
            key={i}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu

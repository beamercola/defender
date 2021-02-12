import React from "react"
import Link from "./Link"

const Footer = () => (
  <footer
    className="bg-yellow fixed bottom-0 inset-x-0 flex flex-col justify-between h-screen lg:h-50vh"
    style={{ zIndex: -50 }}
  >
    <div className="md:flex justify-between uppercase p-6 tracking-widest">
      <a href="mailto:rise@wearedefender.com">rise@wearedefender.com</a>
      <div className="">
        <a
          href="https://instagram.com/wearedefender"
          target="_blank"
          rel="noreferrer"
        >
          INSTAGRAM
        </a>
        {" / "}
        <a
          href="https://twitter.com/wearedefender"
          target="_blank"
          rel="noreferrer"
        >
          TWITTER
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <img className="w-32" src="/defender-d.svg" alt="Defender" />
    </div>
    <div className="">
      <div className="md:flex justify-between uppercase border-b border-black p-6 tracking-widest">
        <div className="">
          <Link to="/about">ABOUT US</Link> | &copy; 2020
        </div>
        <a href="https://adachiproject.com">PRESENTED BY THE ADACHI PROJECT</a>
      </div>
      <div className="flex justify-end md:h-32">
        <p className="font-mono uppercase text-sm p-6 w-2/3 md:w-1/2">
          Defender is created by The Adachi Project, a partnership between the
          San Francisco Public Defender’s Office, Even/Odd, and Compound,
          honoring the legacy of the late San Francisco Public Defender, Jeff
          Adachi.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

import React from "react"
import DLogo from "../images/defender-d.svg"

const Footer = () => (
  <footer
    className="bg-yellow fixed bottom-0 inset-x-0 flex flex-col justify-between"
    style={{ height: "50vh", zIndex: -50 }}
  >
    <div className="md:flex justify-between uppercase p-6 tracking-widest">
      <a href="mailto:fight@wearedefender.com">fight@wearedefender.com</a>
      <div className="">INSTAGRAM / TWITTER</div>
    </div>
    <div className="flex items-center justify-center">
      <img className="w-32" src={DLogo} />
    </div>
    <div className="">
      <div className="flex justify-between uppercase border-b border-black p-6 tracking-widest">
        <div className="">ABOUT US | &copy; 2020</div>
        <div className="">PRESENTED BY THE ADACHI FUND</div>
      </div>
      <p className="font-mono text-sm p-6 md:w-1/2">
        EXPLORE MORELorem ipsum dolor sit amet, consectetuer adipisc- ing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
        erat volutpat. Ut wisi enim ad minim
      </p>
    </div>
  </footer>
)

export default Footer

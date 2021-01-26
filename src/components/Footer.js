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
        <div className="">PRESENTED BY THE ADACHI PROJECT</div>
      </div>
      <p className="font-mono text-sm p-6 md:w-1/2">
        DEFENDER IS AN URGENT JOURNALISTIC FILM, ART, AND MEDIA PROJECT ABOUT
        THE WORK OF THE SAN FRANCISCO OFFICE OF THE PUBLIC DEFENDER. IT IS
        CREATED TO BRING REFORM TO THE INEQUITIES OF THE CRIMINAL LEGAL SYSTEM
      </p>
    </div>
  </footer>
)

export default Footer

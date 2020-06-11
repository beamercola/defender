import React from "react"
import Newsletter from "../components/newsletter"

const Footer = () => (
  <div className="mx-4 mt-12 mb-4 lg:mb-0 md:mb-16 lg:mt-24 xl:mb-24">
    <div className="flex flex-col items-end py-2 -mx-4 lg:flex-row">
      <div className="px-4 w-full mb-4 lg:mb-0 lg:w-1/5 text-xs font-bold text-center md:text-left">
        GET INVOLVED
      </div>
      <div className="px-4 w-full mb-4 lg:mb-0 lg:w-1/5">
        <Newsletter />
      </div>
      <div className="px-4 w-full mb-4 lg:mb-0 lg:w-1/5">
        <a className="font-bureau block rounded-lg bg-yellow-500 text-xs font-bold flex justify-center items-center cursor-pointer px-4 pt-16 pb-12 rounded-t-full lg:h-8">
          DONATE
        </a>
      </div>
      <div className="px-4 w-full mb-4 lg:mb-0 lg:w-1/5">&nbsp;</div>
      <div className="px-4 w-full lg:w-1/5 flex justify-between">
        <a href="https://twitter.com/_wearedefender/" target="_blank">
          <img className="h-8" src="social-twitter.png" />
        </a>
        <a href="http://www.instagram.com/wearedefender" target="_blank">
          <img className="h-8" src="social-ig.png" />
        </a>
      </div>
    </div>
    <footer className="border-t-2 border-black text-xs font-bureau mb-2">
      <div className="flex flex-wrap -mx-4 py-4 font-medium">
        <div className="px-4 w-1/2 lg:w-1/3">
          <a
            className="block text-orange-600"
            href="mailto:fight@wearedefender.com"
          >
            FIGHT@WEAREDEFENDER.COM
          </a>
          <p>Pending Board Of Supervisor Approval</p>
          <img className="h-12 mt-8" src="adachi_fund_logo.png" />
        </div>
        <div className="px-4 w-1/2 lg:w-1/3">
          <span className="font-gothic">Defender</span> is created by{" "}
          <a
            className="text-orange-600"
            href="https://evenoddfilms.com"
            target="_blank"
          >
            Even/Odd
          </a>{" "}
          and is a project of The Adachi Fund, a collaboration between the San
          Francisco Public Defender's Office , Even/Odd and Compound
        </div>
        <div className="px-4 w-full text-center my-12 lg:my-0 lg:w-1/3 lg:text-right">
          Site design by{" "}
          <a className="text-orange-600" href="https://houseofgul.com">
            House of Gul
          </a>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer

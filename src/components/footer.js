import React from "react"
import Newsletter from "../components/newsletter"

const Footer = () => (
  <div className="mx-4 mt-12 mb-4 lg:mb-0 md:mb-16 lg:mt-24 xl:mb-24">
    <div className="flex flex-col items-end py-2 -mx-4 lg:flex-row">
      <div className="px-4 flex flex-col lg:items-end text-xs font-bold text-center w-full mb-8 lg:flex-row lg:mb-0 lg:w-5/12 md:text-left">
        <div className="whitespace-no-wrap mb-2 lg:mb-0">GET INVOLVED</div>
        <div className="lg:px-4 w-full flex-grow">
          <Newsletter />
        </div>
      </div>

      <div className="px-2 w-full mb-4 lg:mb-0 lg:w-3/12">
        <a
          className="font-bureau block rounded-lg bg-yellow-500 text-xs font-bold flex justify-center items-center cursor-pointer px-4 pt-16 pb-12 rounded-t-full lg:h-8"
          href="https://wearedefender.wedid.it/"
          target="_blank"
        >
          DONATE
        </a>
      </div>
      <div className="w-1/12"></div>
      <div className="px-4 w-full lg:w-3/12 flex justify-between">
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
        <div className="px-4 w-full md:w-1/2 lg:w-5/12">
          <a
            className="block text-orange-600"
            href="mailto:fight@wearedefender.com"
          >
            FIGHT@WEAREDEFENDER.COM
          </a>
          <p>Pending Board Of Supervisor Approval</p>
          <img
            className="h-12 my-4 mx-auto md:mx-0"
            src="adachi_fund_logo.png"
          />
        </div>
        <div className="px-4 w-full md:w-1/2 lg:w-4/12">
          <span className="font-gothic text-lg">Defender</span> is created by{" "}
          <a
            className="text-orange-600"
            href="https://evenoddfilms.com"
            target="_blank"
          >
            Even/Odd
          </a>{" "}
          and is a project of The Adachi Fund, a collaboration between the San
          Francisco Public Defender's Office, Even/Odd and Compound
        </div>
        <div className="px-4 w-full text-center my-12 lg:my-0 lg:w-3/12 lg:text-right">
          Site design by{" "}
          <a
            className="text-orange-600"
            href="https://houseofgul.com"
            target="_blank"
          >
            House of Gul
          </a>
          <br />
          Development by Beamer
        </div>
      </div>
    </footer>
  </div>
)

export default Footer

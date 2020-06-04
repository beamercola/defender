import React from "react"
import Newsletter from "../components/newsletter"

const Footer = () => (
  <div className="mx-4 mt-12 mb-4 md:mx-16 xl:mx-24 md:mb-16 lg:mt-64 xl:mb-24">
    <div className="flex flex-col items-center py-2 -mx-2 lg:flex-row">
      <div className="px-2 w-full mb-4 lg:w-1/5 text-xs font-bold">
        GET INVOLVED
      </div>
      <div className="px-2 w-full mb-4 lg:w-1/5">
        <Newsletter />
      </div>
      <div className="px-2 w-full mb-4 lg:w-1/5">
        <a className="block rounded-lg bg-yellow-400 text-xs font-bold flex justify-center items-center cursor-pointer px-4 py-3 lg:h-8">
          DONATE
        </a>
      </div>
      <div className="px-2 w-full mb-4 lg:w-1/5">&nbsp;</div>
      <div className="px-2 w-full lg:w-1/5 flex justify-between">
        <a href="https://twitter.com/_wearedefender/" target="_blank">
          <img className="h-8" src="social-twitter.png" />
        </a>
        <a href="http://www.instagram.com/wearedefender" target="_blank">
          <img className="h-8" src="social-ig.png" />
        </a>
      </div>
    </div>
    <footer className="border-t-2 border-black text-xs">
      <div className="flex flex-wrap -mx-2 py-4 tracking-tighter font-medium">
        <div className="px-2 w-1/2 lg:w-1/5">
          <h4 className="font-extrabold">Adult Division - HOJ</h4>
          <p>555 Seventh Street</p>
          <p>San Francisco, CA 94103</p>
          <p>P: 415.553.1671</p>
          <p>F: 415.553.9810</p>
          <a href="https://www.sfpublicdefender.org" target="_blank">
            www.sfpublicdefender.org
          </a>
        </div>
        <div className="px-2 w-1/2 lg:w-1/5">
          <h4 className="font-extrabold">Juvenile Division - YGC 375</h4>
          <p>Woodside Avenue, Rm. 118</p>
          <p>San Francisco, CA 94127</p>
          <p>P: 415.753.7601</p>
          <p>F: 415.566.3030</p>
        </div>
        <div className="px-2 w-1/2 lg:w-1/5">
          <h4 className="font-extrabold">Juvenile Division - JJC 258A</h4>
          <p>Laguna Honda Blvd.</p>
          <p>San Francisco, CA 94116</p>
          <p>P: 415.753.8174</p>
          <p>F: 415.753.8175</p>
        </div>
        <div className="px-2 w-1/2 lg:w-1/5">
          <h4 className="font-extrabold">Clean Slate</h4>
          <p>P: 415.553.9337</p>
          <a href="https://sfpublicdefender.org/services" target="_blank">
            sfpublicdefender.org/services
          </a>
          <h4 className="font-extrabold mt-4">Community Justice Center</h4>
          <p>P: 415.202.2832</p>
          <p>F: 415.563.8506</p>
        </div>
        <div className="px-2 w-1/2 lg:w-1/5">
          <h4 className="font-extrabold">Bayview Magic</h4>
          <p>P: 415.558.2428</p>
          <a href="https://www.bayviewmagic.org" target="_blank">
            www.bayviewmagic.org
          </a>
          <h4 className="font-extrabold mt-4">MoMagic</h4>
          <p>P: 415.567.0400</p>
          <a href="https://www.momagic.org" target="_blank">
            www.momagic.org
          </a>
        </div>
      </div>
    </footer>
    <strong className="text-xs font-bold">
      PENDING BOARD OF SUPERVISOR APPROVAL
    </strong>
  </div>
)

export default Footer

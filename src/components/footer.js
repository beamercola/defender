import React from "react"

const Footer = () => (
  <div className="mx-4 mt-64 md:mx-16 xl:mx-24">
    <div className="flex flex-col items-center py-2 -mx-2 lg:flex-row">
      <div className="px-2 w-full mb-4 lg:w-1/5 text-xs font-bold">
        GET INVOLVED
      </div>
      <div className="px-2 w-full mb-4 lg:w-1/5">
        <input
          className="rounded-lg bg-orange-600 px-2 py-1 w-full h-8"
          type="text"
        />
      </div>
      <div className="px-2 w-full mb-4 lg:w-1/5">
        <a className="block rounded-lg bg-yellow-400 text-xs font-bold h-8 flex justify-center items-center cursor-pointer">
          DONATE
        </a>
      </div>
      <div className="px-2 w-full mb-4 lg:w-1/5">&nbsp;</div>
      <div className="px-2 w-full lg:w-1/5 flex justify-between">
        <a href="">
          <img className="h-8" src="social-twitter.png" />
        </a>
        <a href="">
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
          <p>www.sfpublicdefender.org</p>
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
          <p>sfpublicdefender.org/services</p>
          <h4 className="font-extrabold mt-4">Community Justice Center</h4>
          <p>P: 415.202.2832</p>
          <p>F: 415.563.8506</p>
        </div>
        <div className="px-2 w-1/2 lg:w-1/5">
          <h4 className="font-extrabold">Bayview Magic</h4>
          <p>P: 415.558.2428</p>
          <p>www.bayviewmagic.org</p>
          <h4 className="font-extrabold mt-4">MoMagic</h4>
          <p>P: 415.567.0400</p>
          <p>www.momagic.org</p>
        </div>
      </div>
    </footer>
    <strong className="text-xs font-bold">
      PENDING BOARD OF SUPERVISOR APPROVAL
    </strong>
  </div>
)

export default Footer

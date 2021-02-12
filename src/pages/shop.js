import React from "react"
import Layout from "../components/Layout"
import { SectionHeader } from "../components/Slices"

const Shop = () => {
  return (
    <Layout cover={<div className="h-40 bg-red" />}>
      <div className="">
        <SectionHeader className="px-8 border-t">SHOP</SectionHeader>

        <div
          className="flex items-center justify-center"
          style={{ height: "50vh" }}
        >
          <h1 className="font-snell text-7xl">Coming Soon</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Shop

const Product = () => (
  <div>
    <img className="h-96 w-full bg-black" alt="" />
    <h2 className="font-bureau-wide uppercase text-2xl py-2 font-bold">
      Title
    </h2>
    <p>Description</p>
    <p className="">
      Add To Cart:
      {["Small", "Medium", "Large"].map((size, i) => (
        <button className="pl-4 underline">{size}</button>
      ))}
    </p>
  </div>
)

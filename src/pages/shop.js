import React from "react"
import Layout from "../components/Layout"
import { SectionHeader } from "../components/Slices"

export default () => {
  return (
    <Layout cover={<div className="h-40" />}>
      <div className="">
        <SectionHeader className="px-8 border-t">SHOP</SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-8">
          <Product />
          <Product />
        </div>
      </div>
    </Layout>
  )
}

const Product = () => (
  <div>
    <img className="h-96 w-full bg-black" />
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

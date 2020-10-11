import React from "react"

const SectionHeader = ({ className, children }) => (
  <div
    className={`h-12 md:h-8 flex items-center font-mono md:text-xs border-b bg-white ${className}`}
  >
    {children}
  </div>
)

export default SectionHeader

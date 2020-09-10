import React from "react"

const SectionHeader = ({ className, children }) => (
  <div
    className={`h-8 flex items-center font-mono text-xs border-b bg-white ${className}`}
  >
    {children}
  </div>
)

export default SectionHeader

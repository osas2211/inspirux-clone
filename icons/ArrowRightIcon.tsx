"use client"
import React from "react"

export const ArrowRightIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="21"
      viewBox="0 0 27 21"
      fill="none"
    >
      <path
        d="M16.7355 1.22402e-07C16.7355 5.79899 21.3311 10.5 27 10.5C21.3311 10.5 16.7355 15.201 16.7355 21M26.7769 10.5L4.67938e-07 10.5"
        stroke={color || "black"}
        strokeWidth="2"
      />
    </svg>
  )
}

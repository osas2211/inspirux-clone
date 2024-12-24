"use client"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"

export const ScrollDownIcon = () => {
  const arrow_ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      "#scroll-down-arrow",
      { y: -15 },
      { y: 15, repeat: -1, yoyo: true, duration: 0.9 }
    )
  }, [])
  return (
    <svg
      ref={arrow_ref}
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="41"
      viewBox="0 0 31 41"
      fill="none"
      id="scroll-down-arrow"
    >
      {/* <script xmlns="" /> */}
      <path
        d="M31 25.4132C22.4396 25.4132 15.5 32.3917 15.5 41C15.5 32.3917 8.56041 25.4132 -2.21364e-06 25.4132M15.5 40.6612L15.5 7.01307e-07"
        stroke="#B3EC11"
        strokeWidth="4"
      />
    </svg>
  )
}

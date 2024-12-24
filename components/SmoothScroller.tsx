"use client"
import React, { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"

export const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
  // gsap.registerPlugin(ScrollTrigger)
  const container = useRef(null)
  // useGSAP(() => {}, { scope: container })
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.8, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      //  direction: "vertical", // Scroll direction
      //  smooth: true, // Enable smooth scrolling
    })

    // Animation frame for Lenis updates
    const animate = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    // Cleanup Lenis instance on unmount
    return () => lenis.destroy()
  }, [])

  return (
    <div id="smooth-wrapper" ref={container}>
      <div id="smooth-content">{children}</div>
    </div>
  )
}

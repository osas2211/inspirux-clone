"use client"
import { useTextReveal } from "@/hooks/useTextReveal"
import Link from "next/link"
import React from "react"

export const About = () => {
  const { scope } = useTextReveal(".about-text-reveal")
  const { scope: smallScope } = useTextReveal(".about-text-reveal-small")
  return (
    <div
      className="w-full min-h-[100vh] bg-[#f9faf7] px-[40px] py-[180px] about-section"
      ref={scope}
    >
      <div className="uppercase text-sm sticky top-[70px] min-w-[640.5px] -mb-[60px] about-sticky">
        <p className="overflow-hidden">
          <span className="about-text-reveal">
            WE BELIEVE IN THE POWER OF DESIGN
          </span>
        </p>
        <p className="overflow-hidden">
          <span className="about-text-reveal">
            AND ITS ABILITY TO DEFINE AND
          </span>
        </p>
        <p className="overflow-hidden">
          <span className="about-text-reveal">TRANSFORM BRANDS.</span>
        </p>
      </div>
      <div className="flex">
        <div className="min-w-[640.5px]"></div>
        <div className="text-[40px] relative about-text">
          <div>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                — Its our commitment to excellence that
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                distinguishes us. Our expertise spans the realms of
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                branding, UI/UX design, and development, where we
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                employ a strategic approach. We seamlessly
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                coordinate across various disciplines and services to
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                craft exceptional products.
              </span>
            </h2>
          </div>
          <div className="mt-[50px] mb-[30px]">
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                Our mission is to empower global enterprises to
              </span>
            </h2>
            <h2 className="overflow-hidden about-last-text">
              <span className="about-text-reveal">
                unlock their maximum capabilities.
              </span>
            </h2>
          </div>
          <div>
            <Link
              href={""}
              className="uppercase text-sm underline font-semibold"
            >
              read more about us
            </Link>
          </div>
          <div
            className="flex justify-end items-end mt-[150px] text-xs uppercase"
            id="about-keep-scrolling"
            ref={smallScope}
          >
            <div>
              <p className="overflow-hidden">
                <span className="about-text-reveal-small">KEEP SCROLLING</span>
              </p>
              <p className="overflow-hidden">
                <span className="about-text-reveal-small">GOOD THINGS</span>
              </p>
              <p className="overflow-hidden">
                <span className="about-text-reveal-small">ARE COMING ❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

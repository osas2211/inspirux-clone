"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import React, { useRef } from "react"

export const MobileNav = () => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const scope = useRef(null)
  const hamburgerTimeline = useRef(gsap.timeline({ paused: true }))
  useGSAP(
    () => {
      hamburgerTimeline.current
        .to("#hamburger-top", {
          y: "8px",
          duration: 0.3,
          ease: "expo.out",
          rotate: 45,
          transformOrigin: "50% 50%",
        })
        .to(
          "#hamburger-bottom",
          {
            y: "-2px",
            duration: 0.3,
            ease: "expo.out",
            rotate: -45,
            transformOrigin: "50% 50%",
            onStart: function () {
              timeline.current.play()
            },
            onReverseComplete: () => {
              timeline.current.reverse(1)
            },
          },
          "<"
        )
      timeline.current
        .to("#mobile-menu", {
          clipPath: "circle(154.6% at 100% 0%)",
          ease: "circ.inOut",
          duration: 1.2,
        })
        .fromTo(
          ".mobile-link",
          { opacity: 0, y: 200 },
          {
            opacity: 1,
            y: 0,
            ease: "back.out(1)",
            duration: 0.7,
            stagger: 0.05,
          },
          "-=.8"
        )
    },
    { scope }
  )
  return (
    <div ref={scope} className="md:hidden inline-block">
      <div
        id="hamburger"
        className="h-[44px] w-[44px] flex items-center justify-center gap-2 flex-col cursor-pointer md:hidden absolute top-[1px] right-[20px] z-[100]"
        onClick={() => {
          if (hamburgerTimeline.current.progress() === 1) {
            hamburgerTimeline.current.reverse()
          } else {
            hamburgerTimeline.current.play()
          }
        }}
      >
        <div id="hamburger-top" className="w-[25px] h-[2px] bg-primary"></div>
        <div
          id="hamburger-bottom"
          className="w-[25px] h-[2px] bg-primary"
        ></div>
      </div>

      <div
        className="absolute w-screen h-screen bg-[#101012] z-[-10] top-0 left-0 text-[#eee] py-[100px] px-[20px] text-end uppercase"
        id="mobile-menu"
      >
        <ul className=" text-[42px] leading-[110%] mb-7">
          <li>
            <Link href={""} className="mobile-link inline-block">
              Works
            </Link>
          </li>
          <li>
            <Link href={""} className="mobile-link inline-block">
              expertise
            </Link>
          </li>
          <li>
            <Link href={""} className="mobile-link inline-block">
              about
            </Link>
          </li>
          <li>
            <Link href={""} className="mobile-link inline-block">
              insights
            </Link>
          </li>
          <li>
            <Link href={""} className="mobile-link inline-block">
              contact
            </Link>
          </li>
        </ul>

        <ul className="space-y-3 text-[17px]">
          <li>
            <span className="inline-block mobile-link">dribble</span>
          </li>
          <li>
            <span className="inline-block mobile-link">behance</span>
          </li>
          <li>
            <span className="inline-block mobile-link">linkedin</span>
          </li>
          <li>
            <span className="inline-block mobile-link">x (twitter)</span>
          </li>
          <li>
            <span className="inline-block mobile-link">instagram</span>
          </li>
          <li>
            <span className="inline-block mobile-link">facebook</span>
          </li>
          <li>
            <span className="inline-block mobile-link">youtube</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

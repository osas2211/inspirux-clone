/* eslint-disable @next/next/no-img-element */
"use client"
import { useRevealLeft } from "@/hooks/useRevealLeft"
import { useTextReveal } from "@/hooks/useTextReveal"
import { ArrowRightIcon } from "@/icons/ArrowRightIcon"
import gsap from "gsap"
import Link from "next/link"
import React, { useEffect } from "react"

export const Insights = () => {
  const {} = useTextReveal(".insights-text-reveal", false)
  const { scope } = useRevealLeft({
    target: ".selected-insight-link",
    trigger: "#selected-insight-links",
    mobileEnd: "+=1500px",
    desktopEnd: "+=1500px",
  })
  useEffect(() => {
    gsap.to(".featured-image-clip", {
      clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
      ease: "expoScale(0.5,7,power2.inOut)",
      duration: 1,
      scrollTrigger: {
        trigger: ".featured-image-clip",
        scrub: true,
        end: window?.matchMedia("(max-width: 760px)")?.matches
          ? "+=700px"
          : "+=850px",
      },
    })
  }, [])
  const insights = [
    {
      title:
        "Revolutionizing User Experience: Top UI/UX Design Trends for 2024",
      subText: "website + web app portal",
      img: "/assets/insight1.png",
    },
    {
      title: "Unlocking Your Potential: Beyond the Title of “Designer”",
      subText: "website redesign + art direction",
      img: "/assets/insight2.png",
    },
    {
      title:
        "Mastering the Art of Landing Page Design: Your Ultimate Guideline for Perfection",
      subText:
        "In the fast-paced digital world, first impressions matter more than ever...",
      img: "/assets/insight3.png",
    },
  ]
  return (
    <div className="bg-[#d4d9d7] w-full md:pl-[40px] pl-5 2xl:py-[160px] md:py-[78px] py-10">
      <div className="uppercase md:text-sm text-[10px] md:sticky md:top-[70px] 2xl:min-w-[640.5px] md:min-w-[30%] md:-mb-[120px] mb-[30px] about-sticky">
        <p className="overflow-hidden">
          <span className="insights-text-reveal">SOMETIMES WE WRITE,</span>
        </p>
        <p className="overflow-hidden">
          <span className="insights-text-reveal">SOMETIME WE READ</span>
        </p>

        <div className="mt-5">
          <Link
            href={""}
            className="uppercase md:text-sm text-xs underline font-semibold"
          >
            view all
          </Link>
        </div>
      </div>

      <div className="flex" ref={scope}>
        <div className="2xl:min-w-[640.5px] md:min-w-[30%]"></div>
        <div className="2xl:text-[40px] md:text-[32px] text-[19px] relative service-text md:w-[70%] w-full">
          <div className="md:block hidden">
            <h2 className="overflow-hidden">
              <span className="insights-text-reveal">
                — Valuable insights, exciting stories
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="insights-text-reveal">
                and other things worth sharing with
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="insights-text-reveal">the world.</span>
            </h2>
          </div>
          <div className="md:hidden block pr-4">
            <h2 className="overflow-hidden">
              <span className="insights-text-reveal">
                —Valuable insights, exciting stories and
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="insights-text-reveal">
                other things worth sharing with the world.
              </span>
            </h2>
          </div>

          <div className="cursor-pointer md:mt-32 mt-7 w-full border-b-[1px] border-[#101012]/70 md:py-5 py-5 md:pr-10 pr-5 line-bottom before:bg-black">
            <p className="md:text-sm text-[10px] uppercase">
              featured insights
            </p>

            <div className="md:my-5 mt-2 mb-4 w-full md:h-[690px] h-[250px] featured-image rounded-2xl relative">
              <img
                src="/assets/featured-insight.jpg"
                alt=""
                className="w-full h-full rounded-2xl object-cover object-center "
              />
              <div className="featured-image-clip absolute top-0 left-0 bg-[#d4d9d7] z-[10] w-full h-full rounded-2xl" />
            </div>

            <div>
              <p className="2xl:text-[40px] md:text-[32px] text-[19px]">
                Story behind the Inspirux Rebranding: A Journey of Growth
              </p>
              <p className="md:text-sm text-xs">
                It all began in 2019 with a simple gathering of three friends.
                We sat together, casually discussing our freelance UI/UX
                projects...
              </p>
            </div>
          </div>

          <div
            className="w-full overflow-x-hidden md:mt-16 mt-7"
            id="selected-insight-links"
          >
            {insights.map((insight, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex md:flex-row flex-col md:gap-10 gap-5 selected-insight-link will-change-scroll border-b-[1px] border-b-[#101012]/70 md:py-[30px] py-5 md:pr-10 pr-5 line-bottom before:bg-black cursor-pointer"
                >
                  <div className="h-[120px] md:w-[200px] w-[150px] featured-image rounded-xl">
                    <img
                      alt=""
                      src={insight.img}
                      className="w-full h-full rounded-xl object-cover object-center"
                    />
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div>
                      <p className="2xl:text-[40px] md:text-[32px] text-[20px] leading-[125%] max-w-[850px] tracking-tight text-2xl">
                        {insight.title}
                      </p>
                      <p className="md:text-sm text-[10px] md:mt-2 mt-1">
                        {insight.subText}
                      </p>
                    </div>
                    <div className="rotate-icon md:mt-0 mt-[-25%] md:scale-100 scale-[0.6]">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

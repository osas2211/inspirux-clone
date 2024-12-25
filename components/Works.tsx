"use client"
import { useTextReveal } from "@/hooks/useTextReveal"
import { ArrowRightIcon } from "@/icons/ArrowRightIcon"
import Link from "next/link"
import React from "react"

export const Works = () => {
  const { scope: textRevealScope } = useTextReveal(".work-text-reveal", false)
  const { scope: textRevealScopeLg } = useTextReveal(
    ".work-text-reveal-lg",
    false
  )

  const works = [
    {
      title: "orbital",
      subText: "website + web app portal",
    },
    {
      title: "bentley",
      subText: "website redesign + art direction",
    },
    {
      title: "ACRE MADE",
      subText: "BRANDING + VISUAL IDENTITY",
    },
    {
      title: "munich",
      subText: "BRANDING + VISUAL IDENTITY",
    },
    {
      title: "mont mark",
      subText: "visual + brand identity",
    },
    {
      title: "swiftpal",
      subText: "BRANDING + VISUAL IDENTITY",
    },
    {
      title: "kover",
      subText: "VISUAL + BRANDING IDENTITY",
    },
    {
      title: "penthomes",
      subText: "VISUAL + BRANDING IDENTITY",
    },
    {
      title: "h&m",
      subText: "APPLICATION DESIGN + MODIFICATIONS",
    },
    {
      title: "AGNES LLOYD-PLATT",
      subText: "WEBSITE UIUX DESIGN",
    },
  ]
  return (
    <>
      <div className="bg-[#f9faf7] overflow-x-hidden">
        <div
          className="py-[40px] pb-[50px] md:pb-[100px] w-full flex flex-col items-center justify-center md:text-[15vw] text-[16vw] leading-[105%] tracking-[-1vw] uppercase will-change-scroll"
          id="selected-works-text"
        >
          <h2 id="selected-works-left">Selected</h2>
          <div id="selected-works-right" className="flex gap-4 items-baseline">
            <div className="relative max-w-[326px] md:max-w-[326px]">
              <video
                className="w-[100%] h-[50px] md:w-[100%] md:h-[201px] lg:h-[201px] object-cover rounded-lg"
                autoPlay
                loop
                muted
              >
                <source
                  src="/assets/videos/selected-works-vid.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/70 to-black/0 rounded-xl"></div> */}
            </div>
            <h2 className="">works</h2>
          </div>
        </div>
      </div>
      <div className="md:pl-[40px] pl-5 2xl:py-[100px] md:py-[78px] py-10 bg-[#f9faf7] border-y-[1px] border-y-[#101012]">
        <div
          className="uppercase md:text-sm text-xs md:sticky md:top-[70px] 2xl:min-w-[640.5px] md:min-w-[30%] md:-mb-[160px] about-sticky"
          ref={textRevealScope}
        >
          <p className="overflow-hidden">
            <span className="work-text-reveal">
              SIMPLICITY AND CLARITY ARE OUR
            </span>
          </p>
          <p className="overflow-hidden">
            <span className="work-text-reveal">
              GUIDING PRINCIPLES, FROM START TO
            </span>
          </p>
          <p className="overflow-hidden">
            <span className="work-text-reveal">
              FINISH - FROM DESIGN TO PRODUCT
            </span>
          </p>
          <p className="overflow-hidden">
            <span className="work-text-reveal">DEVELOPMENT.</span>
          </p>
          <div className="mt-5">
            <Link
              href={""}
              className="uppercase md:text-sm text-xs underline font-semibold"
            >
              view all works
            </Link>
          </div>
        </div>

        <div className="flex">
          <div className="2xl:min-w-[600.5px] md:min-w-[30%]"></div>
          <div className="w-full overflow-x-hidden" id="selected-work-links">
            {works.map((work, index) => {
              return (
                <div
                  key={index}
                  className="uppercase w-full flex selected-work-link will-change-scroll"
                >
                  <p className="text-xs w-[50px] md:mt-[30px] mt-[20px]">
                    .{index < 9 ? `0${index + 1}` : `${index + 1}`}
                  </p>
                  <div className="w-full border-b-[1px] border-b-[#101012]/70 md:py-10 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black cursor-pointer">
                    <div>
                      <p className="2xl:text-[64px] md:text-[52px] text-2xl">
                        {work.title}
                      </p>
                      <p className="md:text-sm text-[10px] md:mt-5">
                        {work.subText}
                      </p>
                    </div>
                    <div className="rotate-icon">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              )
            })}

            <div
              className="2xl:text-[40px] md:text-[32px] text-[19px] uppercase md:mt-24 mt-7"
              ref={textRevealScopeLg}
            >
              <h2 className="overflow-hidden">
                <span className="work-text-reveal-lg">— CREATIVELY DRIVEN</span>
              </h2>
              <h2 className="overflow-hidden">
                <span className="work-text-reveal-lg">SOLUTION ORIENTATED</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

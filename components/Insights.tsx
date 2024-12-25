/* eslint-disable @next/next/no-img-element */
"use client"
import { useRevealLeft } from "@/hooks/useRevealLeft"
import { useTextReveal } from "@/hooks/useTextReveal"
import gsap from "gsap"
import Link from "next/link"
import React, { useEffect } from "react"

export const Insights = () => {
  const {} = useTextReveal(".insights-text-reveal", false)
  const { scope } = useRevealLeft({
    target: ".selected-insight-link",
    trigger: "#selected-insight-links",
    mobileEnd: "+=700px",
    desktopEnd: "+=1500px",
  })
  useEffect(() => {
    gsap.to(".featured-image-clip", {
      clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".featured-image-clip",
        scrub: true,
        end: "+=400px",
      },
    })
  }, [])
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
              <div className="featured-image-clip absolute top-0 left-0 bg-[#d4d9d7] z-[10] w-full h-full" />
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
            <div className="uppercase w-full flex selected-result-link will-change-scroll cursor-pointer">
              <div
                className={`w-full border-b-[1px] border-[#101012]/70 md:py-14 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-3 justify-between w-full">
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        13
                      </p>
                      <p className="md:text-sm text-[12px]">Skilled members</p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        7
                      </p>
                      <p className="md:text-sm text-[12px]">years of growth</p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        70+
                      </p>
                      <p className="md:text-sm text-[12px]">
                        SATISFIED CLIENTS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uppercase w-full flex selected-result-link will-change-scroll cursor-pointer">
              <div
                className={`w-full border-b-[1px] border-[#101012]/70 md:py-14 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-3 justify-between w-full">
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        $10M+
                      </p>
                      <p className="md:text-sm text-[12px]">clients raised</p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        300%
                      </p>
                      <p className="md:text-sm text-[12px]">
                        ONBOARDING CONVERSION RATE
                      </p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        10
                      </p>
                      <p className="md:text-sm text-[12px]">AWARDS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

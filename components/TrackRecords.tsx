/* eslint-disable @next/next/no-img-element */
"use client"
import { useRevealLeft } from "@/hooks/useRevealLeft"
import { useTextReveal } from "@/hooks/useTextReveal"
import React from "react"

const brands = [
  "/assets/brands/brand1.svg",
  "/assets/brands/brand2.svg",
  "/assets/brands/brand3.svg",
  "/assets/brands/brand4.svg",
  "/assets/brands/brand5.svg",
  "/assets/brands/brand6.svg",
  "/assets/brands/brand7.svg",
  "/assets/brands/brand8.svg",
  "/assets/brands/brand9.svg",
  "/assets/brands/brand10.svg",
  "/assets/brands/brand11.svg",
  "/assets/brands/brand12.svg",
]

export const TrackRecords = () => {
  const {} = useTextReveal(".track-record-text-reveal", false)
  const { scope } = useRevealLeft({
    target: ".selected-track-record-link",
    trigger: "#selected-track-record-links",
    mobileEnd: "+=700px",
    desktopEnd: "+=1500px",
  })

  const { scope: textRevealScopeLg } = useTextReveal(
    ".track-record-text-reveal-lg",
    false
  )

  return (
    <div className="bg-[#f9faf7] w-full md:pl-[40px] pl-5 2xl:pb-[160px] md:pb-[78px] py-10">
      <div className="uppercase md:text-sm text-[10px] md:sticky md:top-[70px] 2xl:min-w-[640.5px] md:min-w-[30%] md:-mb-[90px] mb-[30px] about-sticky">
        <p className="overflow-hidden">
          <span className="track-record-text-reveal">OUR TRACK RECORD OF</span>
        </p>
        <p className="overflow-hidden">
          <span className="track-record-text-reveal">TRUSTED PARTNERS AND</span>
        </p>
        <p className="overflow-hidden">
          <span className="track-record-text-reveal">CLIENTS.</span>
        </p>
      </div>

      <div className="flex" ref={scope}>
        <div className="2xl:min-w-[640.5px] md:min-w-[30%]"></div>
        <div className="2xl:text-[40px] md:text-[32px] text-[19px] relative service-text md:w-[70%] w-full">
          <div className="md:block hidden">
            <h2 className="overflow-hidden">
              <span className="track-record-text-reveal">
                We&apos;ve been fortunate to work with a
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="track-record-text-reveal">
                lot of awesome people on even more
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="track-record-text-reveal">
                awesome projects.
              </span>
            </h2>
          </div>
          <div className="md:hidden block pr-4">
            <h2 className="overflow-hidden">
              <span className="track-record-text-reveal">
                We&apos;ve been fortunate to work with a
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="track-record-text-reveal">
                lot of awesome people on even more awesome projects.
              </span>
            </h2>
          </div>

          <div
            className="w-full overflow-x-hidden md:mt-16 mt-7"
            id="selected-track-record-links"
          >
            <div className="uppercase w-full flex selected-track-record-link will-change-scroll cursor-pointer">
              <div
                className={`w-full border-b-[1px] border-[#101012]/70 md:py-14 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-3 justify-between gap-2 w-full">
                    {brands?.slice(0, 3)?.map((brand, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <img
                            src={brand}
                            alt=""
                            className="md:scale-100 scale-75"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="uppercase w-full flex selected-track-record-link will-change-scroll cursor-pointer">
              <div
                className={`w-full border-b-[1px] border-[#101012]/70 md:py-14 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-3 justify-between gap-2 w-full">
                    {brands?.slice(3, 6)?.map((brand, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <img
                            src={brand}
                            alt=""
                            className="md:scale-100 scale-75"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="uppercase w-full flex selected-track-record-link will-change-scroll cursor-pointer">
              <div
                className={`w-full border-b-[1px] border-[#101012]/70 md:py-14 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-3 justify-between gap-2 w-full">
                    {brands?.slice(6, 9)?.map((brand, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <img
                            src={brand}
                            alt=""
                            className="md:scale-100 scale-75"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="uppercase w-full flex selected-track-record-link will-change-scroll cursor-pointer">
              <div
                className={`w-full border-b-[1px] border-[#101012]/70 md:py-14 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-3 justify-between gap-2 w-full">
                    {brands?.slice(9, 13)?.map((brand, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <img
                            src={brand}
                            alt=""
                            className="md:scale-100 scale-75"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="2xl:text-[40px] md:text-[32px] text-[19px] uppercase md:mt-24 mt-7"
            ref={textRevealScopeLg}
          >
            <h2 className="overflow-hidden">
              <span className="track-record-text-reveal-lg">
                — WE BUILD THE BRANDS
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="track-record-text-reveal-lg">
                THAT CAN&apos;T BE IGNORED!
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

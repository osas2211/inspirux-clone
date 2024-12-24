"use client"
// import Image from "next/image"
import React from "react"

export const Hero = () => {
  return (
    <div className="md:h-[86vh] w-full home-hero relative" id="home-hero">
      <div className="h-full w-full flex flex-col justify-between">
        <div></div>
        <div className="2xl:text-[11.75rem] lg:text-[8rem] p-[40px] 2xl:leading-[160px] lg:leading-[110px] hero-inner-text fixed bottom-[12vh] left-0 w-full">
          <h2 className=" text-primary tracking-tight floating-text">
            Where ideas
          </h2>
          <h2 className="text-[#eee] tracking-tight relative inline-block">
            <span>races to victory!</span>
            <span className="text-[#eeeeeeea] text-[16px] leading-[24px] 2xl:text-[22px] 2xl:leading-[32px] block absolute 2xl:-top-[140px] lg:-top-[85px] right-0 tracking-normal 2xl:max-w-[250px] max-w-[180px]">
              Inspirux® is a strategic design company giving global brands an
              edge.
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

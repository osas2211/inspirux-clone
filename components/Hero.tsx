"use client"
// import Image from "next/image"
import React from "react"

export const Hero = () => {
  return (
    <div
      className="md:h-[86vh] h-[70vh] w-full home-hero relative"
      id="home-hero"
    >
      <div className="h-full w-full flex flex-col justify-between">
        <div></div>
        <div className="2xl:text-[11.75rem] lg:text-[8rem] text-[3.75rem] md:p-[40px] p-5 2xl:leading-[160px] lg:leading-[110px] leading-[85%] hero-inner-text fixed md:bottom-[12vh] bottom-[36vh] left-0 w-full">
          <h2 className=" text-primary tracking-tight floating-text">
            Where ideas
          </h2>
          <h2 className="text-[#eee] tracking-tight relative inline-block">
            <span>races to victory!</span>
            <span className="text-[#eeeeeeea] md:text-[16px] md:leading-[24px] text-[12px] leading-4 2xl:text-[22px] 2xl:leading-[32px] block absolute 2xl:-top-[140px] lg:-top-[85px] top-[115px] md:right-0 tracking-normal 2xl:max-w-[250px] md:max-w-[180px] max-w-[80%]">
              Inspirux® is a strategic design company giving global brands an
              edge.
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

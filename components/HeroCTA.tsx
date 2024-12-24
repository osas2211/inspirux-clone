"use client"
import { PlayIcon } from "@/icons/PlayIcon"
import { ScrollDownIcon } from "@/icons/ScrollDownIcon"
import React from "react"

export const HeroCTA = () => {
  return (
    <>
      <div className="md:h-[14vh] h-auto w-full grid md:grid-cols-[50%,9%,41%] grid-cols-[1fr,15%,60%] uppercase text-xs relative">
        <div className="flex justify-between items-center w-full md:h-full h-[95px] bg-secondary text-white px-5 md:px-10 md:col-span-1 col-span-3">
          <p className="">Explore works</p>
        </div>
        <div className="flex justify-center items-center w-full md:h-full h-[95px] bg-primary text-white px-5 md:px-10">
          <PlayIcon />
        </div>
        <div className="flex justify-between items-center w-full md:h-full h-[95px] bg-[#eee] px-5 md:px-10 md:col-span-1 col-span-2">
          <p className="">Play reel</p>
          <p>scroll down</p>
        </div>
        <div className="inline-block absolute right-[3rem] top-[-5rem]">
          <ScrollDownIcon />
        </div>
      </div>
    </>
  )
}

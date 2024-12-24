"use client"
import { PlayIcon } from "@/icons/PlayIcon"
import { ScrollDownIcon } from "@/icons/ScrollDownIcon"
import React from "react"

export const HeroCTA = () => {
  return (
    <>
      <div className="md:h-[14vh] w-full grid grid-cols-[50%,9%,41%] uppercase text-xs relative">
        <div className="flex justify-between items-center w-full h-full bg-secondary text-white px-5 md:px-10">
          <p className="">Explore works</p>
        </div>
        <div className="flex justify-center items-center w-full h-full bg-primary text-white px-5 md:px-10">
          <PlayIcon />
        </div>
        <div className="flex justify-between items-center w-full h-full bg-[#eee] px-5 md:px-10">
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

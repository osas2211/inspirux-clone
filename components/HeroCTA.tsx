"use client"
import { PlayIcon } from "@/icons/PlayIcon"
import { ScrollDownIcon } from "@/icons/ScrollDownIcon"
import React, { useEffect, useRef, useState } from "react"

export const HeroCTA = () => {
  const [showVideo, setShowVideo] = useState(false)
  const playRef: React.Ref<HTMLDivElement> = useRef(null)
  const videoRef: React.Ref<HTMLVideoElement> = useRef(null)

  const toggleVideo = () => setShowVideo(!showVideo)
  useEffect(() => {
    playRef.current?.addEventListener("mouseenter", () => {
      toggleVideo()
      // videoRef.current?.play()
    })
    playRef.current?.addEventListener("mouseleave", () => {
      toggleVideo()
      // videoRef.current?.pause()
    })

    return () => {
      playRef.current?.removeEventListener("mouseleave", () => {})
      playRef.current?.removeEventListener("mouseenter", () => {})
    }
  }, [showVideo])
  return (
    <>
      <div className="md:h-[14vh] h-auto w-full grid md:grid-cols-[50%,9%,41%] grid-cols-[1fr,15%,60%] uppercase text-xs relative">
        <div className="flex justify-between items-center w-full md:h-full h-[95px] bg-secondary text-white px-5 md:px-10 md:col-span-1 col-span-3">
          <p className="">Explore works</p>
        </div>
        <div
          className={`${
            !showVideo ? "px-5 md:px-10" : ""
          } flex justify-center items-center w-full md:h-full h-[95px] bg-primary text-white relative cursor-pointer`}
          ref={playRef}
        >
          {showVideo ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              autoPlay
            >
              <source
                src="/assets/videos/selected-works-vid.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <PlayIcon />
            </>
          )}
          {/* <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            
          </div> */}
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

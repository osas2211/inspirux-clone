"use client"
import { useCounter } from "@/hooks/useCounter"
import { useRevealLeft } from "@/hooks/useRevealLeft"
import { useTextReveal } from "@/hooks/useTextReveal"
import Link from "next/link"
import React from "react"

export const Results = () => {
  const {} = useTextReveal(".results-text-reveal", false)
  const [skilledWorkers, play_skilledWorkers] = useCounter(0, 13)
  const [years_of_growth, play_years_of_growth] = useCounter(0, 7)
  const [satisfied_clients, play_satisfied_clients] = useCounter(0, 70)
  const [clients_raised, play_clients_raised] = useCounter(0, 10)
  const [conversion_rate, play_conversion_rate] = useCounter(0, 300)
  const [awards, play_awards] = useCounter(0, 10)

  const playCounter = () => {
    play_skilledWorkers()
    play_years_of_growth()
    play_satisfied_clients()
    play_clients_raised()
    play_conversion_rate()
    play_awards()
  }

  const { scope } = useRevealLeft({
    target: ".selected-result-link",
    trigger: "#selected-result-links",
    mobileEnd: "+=1200px",
    desktopEnd: "+=1500px",
    onStart: playCounter,
  })

  return (
    <div className="bg-[#f9faf7] w-full md:pl-[40px] pl-5 2xl:py-[160px] md:py-[78px] py-10">
      <div className="uppercase md:text-sm text-[10px] md:sticky md:top-[70px] 2xl:min-w-[640.5px] md:min-w-[30%] md:-mb-[120px] mb-[30px] about-sticky">
        <p className="overflow-hidden">
          <span className="results-text-reveal">
            WE HAVE DRIVEN RESULTS FOR OVER
          </span>
        </p>
        <p className="overflow-hidden">
          <span className="results-text-reveal">
            100+ STARTUP BUSINESSES IN THE
          </span>
        </p>
        <p className="overflow-hidden">
          <span className="results-text-reveal">
            PAST 07 YEARS OF TEAM EXPERIENCE.
          </span>
        </p>

        <div className="mt-5">
          <Link
            href={""}
            className="uppercase md:text-sm text-xs underline font-semibold"
          >
            about us
          </Link>
        </div>
      </div>

      <div className="flex" ref={scope}>
        <div className="2xl:min-w-[640.5px] md:min-w-[30%]"></div>
        <div className="2xl:text-[40px] md:text-[32px] text-[19px] relative service-text md:w-[70%] w-full">
          <div className="md:block hidden">
            <h2 className="overflow-hidden">
              <span className="results-text-reveal">
                — We&apos;re a seasoned squad of
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="results-text-reveal">
                creative maestros, brewing brilliance
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="results-text-reveal">with every stroke.</span>
            </h2>
          </div>
          <div className="md:hidden block pr-4">
            <h2 className="overflow-hidden">
              <span className="results-text-reveal">
                — We&apos;re a seasoned squad of creative
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="results-text-reveal">
                maestros, brewing brilliance with every stroke.
              </span>
            </h2>
          </div>

          <div
            className="w-full overflow-x-hidden md:mt-16 mt-7"
            id="selected-result-links"
          >
            <div className="uppercase w-full flex selected-result-link will-change-scroll cursor-pointer">
              <div
                className={`w-full border-b-[1px] border-[#101012]/70 md:py-14 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-black`}
              >
                <div className="w-full">
                  <div className="grid md:grid-cols-3 gap-4 justify-between w-full">
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        {skilledWorkers}
                      </p>
                      <p className="md:text-sm text-[12px]">Skilled members</p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        {years_of_growth}
                      </p>
                      <p className="md:text-sm text-[12px]">years of growth</p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        {satisfied_clients}+
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
                  <div className="grid md:grid-cols-3 gap-4 justify-between w-full">
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        ${clients_raised}M+
                      </p>
                      <p className="md:text-sm text-[12px]">clients raised</p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        {conversion_rate}%
                      </p>
                      <p className="md:text-sm text-[12px]">
                        ONBOARDING CONVERSION RATE
                      </p>
                    </div>
                    <div>
                      <p className="2xl:text-8xl md:text-[52px] text-2xl font-semibold">
                        {awards}
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

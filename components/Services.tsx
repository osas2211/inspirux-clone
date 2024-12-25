"use client"
import { useRevealLeft } from "@/hooks/useRevealLeft"
import { useTextReveal } from "@/hooks/useTextReveal"
import gsap from "gsap"
import Link from "next/link"
import React, { useEffect } from "react"

export const Services = () => {
  const {} = useTextReveal(".services-text-reveal", false)
  const { scope } = useRevealLeft({
    target: ".selected-service-link",
    trigger: "#selected-service-links",
    mobileEnd: "+=700px",
    desktopEnd: "+=1500px",
  })
  const services = [
    {
      title: "research & strategy",
    },
    {
      title: "BRANDING IDENTITY",
    },
    {
      title: "UIUX DESIGN",
    },
    {
      title: "WEB DESIGN + DEV",
    },
    { title: "MOBILE APPS" },
  ]

  useEffect(() => {
    gsap.to(".highlight-text", {
      color: "#eee",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#selected-service-links",
        scrub: true,
        start: "-=228px",
        // end: "+=800px",
      },
    })
  }, [])

  return (
    <div>
      <div className="w-full md:pl-[40px] pl-5 2xl:py-[160px] md:py-[78px] py-10 bg-[#101012] text-[#eee] z-[50]">
        <div className="uppercase md:text-sm text-[10px] md:sticky md:top-[70px] 2xl:min-w-[640.5px] md:min-w-[30%] md:-mb-[120px] mb-[30px] about-sticky">
          <p className="overflow-hidden">
            <span className="services-text-reveal highlight-text md:text-[#eee]/30 text-[#eee]">
              STRATEGY
            </span>
          </p>
          <p className="overflow-hidden">
            <span className="services-text-reveal highlight-text md:text-[#eee]/30 text-[#eee]">
              DESIGN
            </span>
          </p>
          <p className="overflow-hidden">
            <span className="services-text-reveal highlight-text md:text-[#eee]/30 text-[#eee]">
              DEVELOPMENT
            </span>
          </p>
          <p className="overflow-hidden">
            <span className="services-text-reveal highlight-text md:text-[#eee]/30 text-[#eee]">
              MARKETING
            </span>
          </p>
          <div className="mt-5">
            <Link
              href={""}
              className="uppercase md:text-sm text-xs underline font-semibold"
            >
              view all services
            </Link>
          </div>
        </div>

        <div className="flex" ref={scope}>
          <div className="2xl:min-w-[640.5px] md:min-w-[30%]"></div>
          <div className="2xl:text-[40px] md:text-[32px] text-[19px] relative service-text md:w-[70%] w-full">
            <div className="md:block hidden">
              <h2 className="overflow-hidden">
                <span className="services-text-reveal">
                  EXPERTISE — From initial exploration
                </span>
              </h2>
              <h2 className="overflow-hidden">
                <span className="services-text-reveal">
                  through strategy, branding, and on to the
                </span>
              </h2>
              <h2 className="overflow-hidden">
                <span className="services-text-reveal">
                  product&apos;s design and development.
                </span>
              </h2>
            </div>
            <div className="md:hidden block">
              <h2 className="overflow-hidden">
                <span className="services-text-reveal">
                  EXPERTISE — From initial exploration
                </span>
              </h2>
              <h2 className="overflow-hidden">
                <span className="services-text-reveal">
                  through strategy, branding, and on to the
                </span>
              </h2>
              <h2 className="overflow-hidden">
                <span className="services-text-reveal">
                  product&apos;s design and development.
                </span>
              </h2>
            </div>

            <div
              className="w-full overflow-x-hidden md:mt-32 mt-7"
              id="selected-service-links"
            >
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="uppercase w-full flex selected-service-link will-change-scroll cursor-pointer"
                  >
                    <p className="text-xs w-[50px] md:mt-[30px] mt-[20px] text-primary">
                      .{index < 4 ? `0${index + 1}` : `${index + 1}`}
                    </p>
                    <div className="w-full border-b-[1px] border-b-[#f9faf7]/10 md:py-10 py-5 md:pr-10 pr-5 flex items-center justify-between">
                      <div>
                        <p className="2xl:text-[64px] md:text-[52px] text-2xl">
                          {service.title}
                        </p>
                      </div>
                      <div>+</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

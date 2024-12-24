"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react"

export const useTextReveal = (target: string, scrub?: boolean | number) => {
  const scope: React.Ref<HTMLDivElement | null> = useRef(null)
  const timeline = useRef(gsap.timeline({ paused: true }))

  useGSAP(
    () => {
      gsap.set(scope.current?.querySelectorAll(target) as never, {
        rotate: 5,
        y: "150%",
        display: "inline-block",
      })
      timeline.current.to(scope.current?.querySelectorAll(target) as never, {
        rotate: 0,
        y: 0,
        transformOrigin: "center center",
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: scope.current?.querySelectorAll(target),
          scrub: scrub || 1,
          once: true,
        },
      })
    },
    { scope }
  )

  useEffect(() => {
    timeline.current.play()
  }, [])

  return { scope }
}

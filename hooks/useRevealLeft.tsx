import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export const useRevealLeft = ({
  target,
  trigger,
  mobileEnd,
  desktopEnd,
  onStart,
}: {
  target: string
  trigger: string
  mobileEnd: string
  desktopEnd: string
  onStart?: () => void
}) => {
  const scope: React.Ref<HTMLDivElement | null> = useRef(null)
  const timeline = useRef(gsap.timeline({ paused: true }))

  useGSAP(
    () => {
      timeline.current.fromTo(
        scope.current?.querySelectorAll(target) as never,
        { x: "30%", opacity: 0.7 },
        {
          ease: "power4.out",
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          opacity: 1,
          scrollTrigger: {
            trigger: scope.current?.querySelectorAll(trigger),
            scrub: true,
            end: window?.matchMedia("(max-width: 760px)")?.matches
              ? mobileEnd
              : desktopEnd,
          },
          onStart: () => {
            if (onStart) {
              onStart()
            }
          },
        }
      )
    },
    { scope }
  )
  return { scope, timeline }
}

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

// Usage Example:
// const containerRef = useRef(null);
// useBackgroundScrollTrigger(containerRef, "green");

export default function useBgColorChange(
  triggerRef,
  backgroundColor,
  invertHeader
) {
  useGSAP(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue(backgroundColor)
      .trim()

    const logoColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--logo-color")

    if (triggerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
        defaults: { ease: "none" },
      })

      tl.to(
        document.body,
        {
          background: color,
          duration: 1,
        },
        0
      )
      tl.to(
        document.querySelector("header .logo svg path"),
        {
          fill: invertHeader ? "white" : logoColor,
          duration: 1,
        },
        0
      )
    }
  }, [triggerRef, backgroundColor])
}

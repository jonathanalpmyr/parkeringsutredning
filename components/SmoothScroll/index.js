import { ReactLenis } from "@studio-freight/react-lenis"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function SmoothScroll({ children }) {
  const lenisRef = useRef()

  const options = {
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1.5,
    smoothTouch: false,
    touchMultiplier: 2,
    autoRaf: false,
  }

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis root options={options} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}

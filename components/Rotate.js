import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function Rotate({
  children,
  speed = 1,
  rotateIntensity = 0.8,
  autoRotate = false,
  disableRotate,
  ...props
}) {
  const ref = useRef()
  const autoRotateRef = useRef()
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to a range (-1, 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1

      // Update target rotation based on normalized mouse position
      if (disableRotate) {
        setTargetRotation({
          x: 0, // Rotate up/down based on vertical mouse position
          y: 0, // Rotate left/right based on horizontal mouse position
        })
      } else {
        setTargetRotation({
          x: y * Math.PI * 0.2, // Rotate up/down based on vertical mouse position
          y: -x * Math.PI * 0.2 * rotateIntensity, // Rotate left/right based on horizontal mouse position
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [disableRotate])

  useFrame((state, delta) => {
    if (ref.current) {
      // Smoothly interpolate rotation towards target rotation
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        targetRotation.x,
        0.1 * speed // Adjust lerp factor for smoothness
      )
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetRotation.y,
        0.1 * speed
      )
    }

    if (autoRotateRef.current && autoRotate) {
      // Use delta for consistent auto-rotation speed
      autoRotateRef.current.rotation.y += delta * 0.25 * speed // Adjust speed multiplier as needed
    }
  })

  return (
    <group ref={ref} {...props}>
      <group ref={autoRotateRef}>{children}</group>
    </group>
  )
}

import { useRef } from "react"
import { Col } from "../Grid"
import s from "./Footer.module.scss"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import CallToAction from "@/components/CallToAction"
import { Logo } from "@/components/common/Icons"

export default function Footer({}) {
  const containerRef = useRef()

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to(containerRef.current.previousSibling, {
      borderRadius: 100,
      ease: "none",
      scale: 0.95,

      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.5,
      },
    })
  }, [containerRef])
  return (
    <>
      <CallToAction title="Vi hjälper dig med din parkeringsutredning." />

      <footer className={s.container} ref={containerRef}>
        <div className={s.wrap}>
          <div className="row grid">
            <Col sm="12">
              <div className={s.logo}>
                <Logo />
              </div>
            </Col>
          </div>
        </div>
      </footer>
    </>
  )
}

import { useGSAP } from "@gsap/react"
import { default as clsx, default as cn } from "clsx"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { Col } from "../Layout/Grid"
import Button from "../common/Button"
import s from "./CallToAction.module.scss"

export default function CallToAction({ title, text }) {
  const textRef = useRef()
  const tlRef = useRef()
  const carouselRef = useRef()
  const videoRef = useRef()

  useEffect(() => {
    // videoRef.current?.playbackRate = 1.25
    // console.log((videoRef.current.playbackRate = 0.3))
  }, [videoRef])

  useGSAP(() => {}, [])

  return (
    <section className={clsx(s.container, "text-invert")} id="about">
      <div className={s.character}>
        <Image
          src="/parkyria-character.webp"
          width="884"
          height="1430"
          alt=""
        />
      </div>
      <div className={s.video}>
        <video src="/vecteezy-comic.mp4" preload loop autoPlay ref={videoRef} />
      </div>
      <div className="row grid">
        <Col md="8" mdOffset="2">
          <div className={s.content}>
            <h1 className={cn(s.title)}>{title}</h1>

            {text && <p className={cn(s.title)}>{title}</p>}

            <Button toggleContactModal>Kontakta oss</Button>
          </div>
        </Col>
      </div>
    </section>
  )
}

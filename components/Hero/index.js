import { colors } from "@/lib/colors"
import { Lighting } from "@/pages"
import { useGSAP } from "@gsap/react"
import { View } from "@react-three/drei"
import cn from "clsx"
import { gsap } from "gsap"
import { useRef } from "react"
import { Document } from "../Documents"
import { Col } from "../Layout/Grid"
import Rotate from "../Rotate"
import Button from "../common/Button"
import s from "./Hero.module.scss"

export default function Hero({ title, carousel }) {
  const tlRef = useRef()
  const carouselRef = useRef()

  // useEffect(() => {
  //   console.log((videoRef.current.playbackRate = 0.3))
  // }, [videoRef])

  useGSAP(() => {
    tlRef.current = gsap.timeline({ repeat: -1 })

    carouselRef.current.querySelectorAll("div").forEach((el) => {
      tlRef.current.from(
        el,
        {
          duration: 1,
          rotationX: -90,
          ease: "expo.inOut",
        },
        "-=40%"
      )

      tlRef.current.to(
        el,
        {
          duration: 1,
          rotationX: 90,
          ease: "expo.inOut",
        },
        "+=1"
      )
    })
  }, [])

  return (
    <section className={s.container}>
      {/* <div className={s.video}>
        <video src="/vecteezy-comic.mp4" preload loop autoPlay ref={videoRef} />
      </div> */}
      <div className="row grid">
        <Col sm="12" md="8" mdOffset="2">
          <div className={s.content}>
            <h1 className={cn(s.title)}>{title}, </h1>

            {/* {carousel.map((item, i) => (
              <div className={cn("h1")} key={item}>
                {item}
              </div>
            ))} */}

            <div className={s.carousel} ref={carouselRef}>
              {carousel.map((item, i) => (
                <div className={cn("h1")} key={item}>
                  <span className={colors[i]}>
                    <span>{item}</span>
                  </span>
                </div>
              ))}
            </div>

            <Button toggleContactModal>Kontakta oss</Button>
          </div>
        </Col>
      </div>

      <div className={s.documents}>
        <View className={cn(s.document, s.one)}>
          <Lighting />

          <Rotate>
            <group rotation={[0.15, 0.2, -0.2]} scale={2.5}>
              <Document image="/document3.jpg" />
            </group>
          </Rotate>
        </View>

        <View className={cn(s.document, s.two)}>
          <Lighting />

          <Rotate>
            <group rotation={[-0.15, 0.2, 0.2]} scale={2.5}>
              <Document image="/document2.jpg" />
            </group>
          </Rotate>
        </View>

        <View className={cn(s.document, s.three)}>
          <Lighting />

          <Rotate position={[0, 0, -0.5]}>
            <group rotation={[-0.15, -0.2, 0.2]} scale={2.5}>
              <Document image="/document3.jpg" />
            </group>
          </Rotate>
        </View>
      </div>
    </section>
  )
}

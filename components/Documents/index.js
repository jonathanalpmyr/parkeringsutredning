import { Lighting } from "@/pages"
import { useGSAP } from "@gsap/react"
import { MeshDistortMaterial, View, useTexture } from "@react-three/drei"
import clsx from "clsx"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { DoubleSide } from "three"
import PaperPlane from "../PaperPlane"
import Rotate from "../Rotate"
import s from "./Documents.module.scss"
import useBgColorChange from "@/lib/hooks/useBgColorChange"
import AnimatedText from "../AnimatedText"
import { Col } from "../Layout/Grid"
import { colors } from "@/lib/colors"
import SectionHeading from "../common/SectionHeading"
import Button from "../common/Button"

const features = [
  {
    title: "Parkeringstal",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
  {
    title: "Parkeringsstrategi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
  {
    title: "Utformning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
  {
    title: "Mobilitetslösningar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
  {
    title: "Hållbarhetsmål",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
  {
    title: "Parkeringstal",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
  {
    title: "Parkeringsstrategi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
  {
    title: "Utformning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.",
  },
]

export function Document({ image = "document.jpg", right, ...props }) {
  const texture = useTexture(image)
  const documentRef = useRef()
  const documentGlRef = useRef()

  const tlRef = useRef()

  // Documents animation
  useGSAP(() => {
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".documents-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      defaults: {
        ease: "power.inOut",
      },
    })

    if (documentGlRef.current) {
      tlRef.current.to(
        documentGlRef.current.position,
        {
          x: right ? -5.5 : 5.5,
          ease: "expo.out",
        },
        "0"
      )

      tlRef.current.fromTo(
        documentGlRef.current.rotation,
        {
          y: right ? -0.2 : 0.2,
          z: right ? -0.2 : 0.2,
        },
        {
          y: 0,
          z: 0,
          ease: "expo.out",
        },
        "0"
      )
      tlRef.current.fromTo(
        documentGlRef.current.scale,
        {
          x: 0.8,
          y: 0.8,
          z: 0.8,
        },
        {
          x: 1,
          y: 1,
          z: 1,

          ease: "expo.out",
        },
        "0"
      )

      // tlRef.current.to(
      //   documentGlRef.current.position,
      //   {
      //     z: 400,
      //     duration: 0.01,
      //   },
      //   "+=0"
      // )
    }
  }, [documentGlRef])

  return (
    <group ref={documentGlRef} position={[0, 0, 0.07]}>
      <mesh {...props}>
        <planeGeometry args={[1.3, 1.9, 1]} />
        <meshBasicMaterial map={texture} />

        <MeshDistortMaterial
          transparent
          map={texture}
          radius={1}
          distort={0.2}
          speed={3}
          side={DoubleSide}
        />
      </mesh>
    </group>
  )
}

function Feature({ title, text, className, isRight }) {
  const containerRef = useRef()
  const innerRef = useRef()

  const xPercent = 70
  const skew = 22

  useGSAP(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0.2,
        scale: 0.5,
        skewX: isRight ? -skew : skew,
        skewY: isRight ? skew : -skew,
        xPercent: isRight ? -xPercent : xPercent,

        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top center+=10%",
          scrub: 1,
        },
      })

      gsap.to(innerRef.current, {
        opacity: 0.2,
        scale: 0.5,
        // skewX: isRight ? skew : -skew,
        // skewY: isRight ? -skew : skew,

        xPercent: isRight ? -xPercent : xPercent,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "bottom top",
          scrub: 1,
        },
      })
    }
  }, [])
  return (
    <div className={clsx(s.feature)} ref={containerRef}>
      <div className={clsx(s.inner, className)} ref={innerRef}>
        <h3 className="h4">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default function Documents() {
  const containerRef = useRef()
  const outroRef = useRef()

  const document2Ref = useRef()
  const document2GlRef = useRef()

  useBgColorChange(containerRef, "--bg-dark", 1)

  useBgColorChange(outroRef, "--bg-light", 0)

  //   useGSAP(() => {
  //     if (paperPlaneRef.current) {
  //       gsap.from(paperPlaneRef.current, {
  //         yPercent: -100,
  //         scale: 2.3,
  //         duration: 4,
  //         ease: "expo.inOut",
  //       })
  //     }
  //   }, [paperPlaneRef])

  return (
    <>
      <View className={s.paperPlane}>
        <Lighting />

        <PaperPlane
          scale={0.0015}
          animated
          position={[0, 0, 0.2]}
          rotation={[Math.PI * 0.5, Math.PI * 0.5, 0]}
        />
      </View>

      <section
        id="how-it-works"
        className={clsx(s.container, "documents-container")}
        ref={containerRef}
      >
        <div className={clsx(s.documents, "documents")}>
          <div className={s.documentsInner}>
            <div className={s.documentsGrid}>
              <div>
                <View className={s.document}>
                  <Lighting />

                  <Document image="/document2.jpg" scale={2.2} />
                </View>
              </div>

              <div>
                <View className={s.document}>
                  <Lighting />

                  <Document image="/document3.jpg" right scale={2.2} />
                </View>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx(s.features, "features")}>
          <div className={s.featuresInner}>
            <div className="row">
              <div className={clsx(s.featuresGrid, "features-grid")}>
                {features.map((item, i) => (
                  <Feature
                    title={item.title}
                    text={item.text}
                    isRight={i % 2}
                    className={colors[i]}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={outroRef}>
        <div className="row grid">
          <Col sm="12" lg="6" lgOffset="3">
            <SectionHeading
              title="Levereras på nolltid"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            />

            <Button toggleContactModal>Kom igång</Button>
          </Col>
        </div>
      </section>
    </>
  )
}

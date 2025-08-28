import clsx from "clsx"
import { useRef } from "react"
import s from "./Process.module.scss"
import { ReadingBookIllustration } from "../common/Icons"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SectionHeading from "../common/SectionHeading"
import { colors } from "@/lib/colors"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Col } from "../Layout/Grid"
gsap.registerPlugin(ScrollTrigger)

const process = [
  {
    illustration: <ReadingBookIllustration />,
    title: "1. Uppstartsmöte",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    illustration: <ReadingBookIllustration />,
    title: "2. Projektanalys",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    illustration: <ReadingBookIllustration />,
    title: "3. Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
]

export default function Process({ title, text }) {
  const containerRef = useRef()
  const tlRef = useRef()
  const headingRef = useRef()
  const gridRef = useRef()

  useGSAP(() => {
    tlRef.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
        },
        defaults: {
          ease: "none",
        },
      })
      .to(headingRef.current, {
        opacity: 0,
      })

    // keep a reference of the horizontal 'fake scrolling' animation so we can pass it around
    let scrollTween = gsap.to(gridRef.current, {
      x:
        -gridRef.current.children[0].offsetWidth *
        (gridRef.current.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    })

    // now let's create an animation that triggers based on the horizontal fake-scroll:
    document.querySelectorAll(".card").forEach((item, i) => {
      gsap.fromTo(
        item.querySelector("div"),
        {
          scale: 0.4,
        },
        {
          scale: 0.95,
          ease: "none",
          scrollTrigger: {
            trigger: item.querySelector("div"),
            start: "left right",
            end: "center center",
            containerAnimation: scrollTween, // <-- NEW!!
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        item,
        {
          scale: 0.95,
        },
        {
          scale: 0.4,
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: item.querySelector("div"),
            start: "center center",
            end: "right left",
            containerAnimation: scrollTween, // <-- NEW!!
            scrub: true,
          },
        }
      )
    })
  }, [])

  return (
    <section className={clsx(s.container)} id="process" ref={containerRef}>
      <div className={s.wrap}>
        <div className="row grid">
          <Col sm="12" md="4">
            <div ref={headingRef}>
              <SectionHeading
                title={title}
                text={text}
                leftAlign
                className={s.heading}
              />
            </div>
          </Col>

          <Col sm="12" md="8" className={s.gridWrap}>
            <div className={s.grid} ref={gridRef}>
              {process.map((item, i) => (
                <div className={clsx(s.card, "card")} key={i}>
                  <div className={clsx(s.cardWrap, colors[i])}>
                    {item.illustration}
                    <h3 className="">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </div>
      </div>
    </section>
  )
}

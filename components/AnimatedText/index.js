import cn from "clsx"
import { gsap } from "gsap"
import { useRef } from "react"
import s from "./AnimatedText.module.scss"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/dist/SplitText"
gsap.registerPlugin(SplitText)

export default function AnimatedText({ text, underline }) {
  const textRef = useRef()
  const underlineRef = useRef()
  const tl = useRef()

  useGSAP(() => {
    if (textRef.current) {
      let split = new SplitText(textRef.current, {
        type: "words, lines",
        wordsClass: "word",
      })

      // BLUR: filter: 'blur(6px)'
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 0.3,
          start: "bottom bottom",
          end: underline ? "bottom center" : "bottom 50%",
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: "none",
        },
      })

      textRef.current.querySelectorAll(".word").forEach((el, i) => {
        tl.current.fromTo(
          el,
          { opacity: 0.25 },
          {
            opacity: 1,
            duration: 1,
          },
          `-=50%`
        )
      })

      if (underline) {
        tl.current.fromTo(
          underlineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "center left",
            duration: 2,
            ease: "expo.out",
          },
          `+=0`
        )
      }

      // .to(
      //     split2.chars,
      //     {
      //         duration: 10,
      //         scrambleText: {
      //             text: '{original}',
      //             chars: 'XY#*Z0BQV',
      //             // revealDelay: 0.3,
      //             speed: 2,
      //         },
      //         ease: 'none',
      //         // stagger: 0.005,
      //     },
      //     '0',
      // )
    }
  }, [textRef])

  return (
    <div className={s.container}>
      <div className={cn(s.text)} ref={textRef}>
        {text}
      </div>
      {underline && <div className={s.underline} ref={underlineRef} />}
    </div>
  )
}

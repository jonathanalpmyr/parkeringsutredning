import clsx from "clsx"
import { useRef } from "react"
import AccordionItem from "../common/AccordionItem"
import SectionHeading from "../common/SectionHeading"
import s from "./Faq.module.scss"

const faq = [
  {
    title: "Hur funkar tjänsten?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Hur funkar tjänsten?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Hur funkar tjänsten?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Hur funkar tjänsten?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
]

export default function Faq({ title, text }) {
  const textRef = useRef()

  return (
    <section className={clsx(s.container)} id="faq">
      <div className="row">
        <div className={s.wrap}>
          <SectionHeading title={title} text={text} className="text-invert" />

          <div className={s.grid}>
            {faq.map((item, i) => (
              <AccordionItem title={item.title} text={item.text} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

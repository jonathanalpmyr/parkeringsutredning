import cn from "clsx"
import s from "./Benefits.module.scss"
import { Col } from "../Layout/Grid"
import {
  Check,
  ReadingBookIllustration,
  StrategyIllustration,
  X,
} from "../common/Icons"
import SectionHeading from "../common/SectionHeading"

const before = [
  {
    title: "Data utspridd i Excel-ark och e-post",
  },
  {
    title: "Tidskrävande att samla information",
  },
  {
    title: "Otydliga processer och manuella fel",
  },
  {
    title: "Hög kostnad för externa konsulter",
  },
  {
    title: "Komplex och långsam projektledning",
  },
]

const after = [
  {
    title: "Allt samlat på ett ställe",
  },
  {
    title: "Automatiserad och effektiv process",
  },
  {
    title: "Full överblick och kontroll",
  },
  {
    title: "Anpassad för snabb och enkel hantering",
  },
  {
    title: "Slipp krångel – få utredningen snabbt",
  },
]

export default function Benefits({ title, text }) {
  return (
    <section className={s.container}>
      <div className="row grid">
        <Col sm="12" xl="8" xlOffset="2">
          <SectionHeading title={title} text={text} />

          <div className={s.grid}>
            <div className={s.column}>
              <StrategyIllustration />
              <h3>Före</h3>
              <ul>
                {before.map((item, i) => (
                  <li key={item.title}>
                    <X />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.column}>
              <ReadingBookIllustration />
              <h3>Efter</h3>
              <ul>
                {after.map((item, i) => (
                  <li key={item.title}>
                    <Check />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </div>
    </section>
  )
}

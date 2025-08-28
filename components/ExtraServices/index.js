import clsx from "clsx"
import Button from "../common/Button"
import s from "./ExtraServices.module.scss"
import SectionHeading from "../common/SectionHeading"

const services = [
  {
    title: "Strategisk Parkeringsrådgivning",
    text: "Långsiktiga lösningar för optimerad markanvändning. Fokus på affärsnytta och hållbara strategier. Knapp Boka ett första möte för en skräddarsydd analys.",
  },
  {
    title: "Tillval: Visualisering (3D/heatmaps)",
    text: "Hjälper dig att se och kommunicera lösningen tydligt.",
    price: "5 000 SEK",
  },
  {
    title: "Tillval: Djupgående samnyttjandeanalys",
    text: "Analysera och optimera samnyttjande av parkeringar för maximal effektivitet.",
    price: "10 000 SEK",
  },
  {
    title:
      "Tillval: Fokusera på hållbara alternativ som minskar parkeringsbehovet och klimatavtrycket.",
    text: "Hjälper dig att se och kommunicera lösningen tydligt..",
    price: "10 000 SEK",
  },
]

export default function ExtraServices({ title, text }) {
  return (
    <section className={clsx(s.container)} id="services">
      <div className="row">
        <SectionHeading title={title} text={text} />

        <div className={clsx(s.grid)}>
          {services.map((item, i) => (
            <div
              className={clsx(s.box, i == 0 && ["text-invert", s.large])}
              key={i}
            >
              <h2 className={clsx(i == 0 ? "h3" : "h4")}>{item.title}</h2>
              <p>{item.text}</p>
              <p className={clsx(s.price, "h4")}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

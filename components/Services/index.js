import clsx from "clsx"
import Button from "../common/Button"
import s from "./Services.module.scss"
import SectionHeading from "../common/SectionHeading"
import { useStore } from "@/lib/store"

const servicesRowHeadings = [
  {
    title: "Beskrivning",
  },
  {
    title: "Vad du får",
  },
  {
    title: "Leveranstid",
  },
  {
    title: "Pris",
  },
]
export const services = [
  {
    title: "Liten utredning",
    rows: [
      {
        text: "För små projekt, t.ex. en fastighet eller enkel zonanalys med grundläggande parkeringstal.",
      },
      {
        text: "Snabb analys av parkeringsbehov och en tydlig, användbar rapport.",
      },
      {
        text: "1-3 dagar",
      },
      {
        text: "25.000 SEK",
        isPrice: true,
      },
    ],
  },
  {
    title: "Standard utredning",
    featured: true,
    rows: [
      {
        text: "För flerbostadsprojekt eller mindre områden, inklusive en enkel samnyttjandeanalys.",
      },
      {
        text: "Djupare analys av parkeringslösningar med konkreta rekommendationer.",
      },
      {
        text: "1-4 veckor",
      },
      {
        text: "45.000 SEK",
        isPrice: true,
      },
    ],
  },
  {
    title: "Premium utredning",
    rows: [
      {
        text: "För stadsdelar eller komplexa projekt som kräver omfattande analyser och strategiska beslut.",
      },
      {
        text: "",
        list: "<ul><li>Förslag på bilpooler, cykelparkeringar och andra mobilitetsåtgärder.</li><li>Anpassning till hållbarhetsmål och affärsstrategier.</li><li>Möjlighet till trafikanalys (tilläggstjänst).</li></ul>",
      },
      {
        text: "1-2 veckor",
      },
      {
        text: "95.000 SEK",
        isPrice: true,
      },
    ],
  },
]

export default function Services({ title, text }) {
  const { setSelectedService } = useStore((state) => ({
    setSelectedService: state.setSelectedService,
  }))

  return (
    <section className={clsx(s.container, "text-invert")} id="services">
      <div className="row">
        <div className={s.box}>
          <SectionHeading title={title} text={text} />
          <table className={s.table}>
            <thead>
              <tr>
                <th></th>
                {services.map((item) => (
                  <th key={item.title}>
                    <h3 className="h4">{item.title}</h3>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {servicesRowHeadings.map((row, i) => (
                <tr key={i}>
                  <td>
                    <p className={clsx(s.rowHeading, "h5")}>{row.title} </p>
                  </td>
                  {services.map((column) => (
                    <td key={column.title}>
                      <p
                        className={clsx(
                          column.rows[i].isPrice && [s.price, "h4"]
                        )}
                      >
                        {column.rows[i].text}
                      </p>

                      {column.rows[i].list && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: column.rows[i].list,
                          }}
                        />
                      )}
                      {column.rows[i].isPrice && (
                        <Button
                          color={clsx(!column.featured && "white")}
                          className={s.button}
                          toggleContactModal
                          onClick={() => setSelectedService(column.title)}
                        >
                          Kom igång idag
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

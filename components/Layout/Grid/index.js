import cn from "clsx"
import { useEffect, useState } from "react"
import s from "./Grid.module.scss"

// Grid column
export function Col({ className, children, ...props }) {
  const {
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
    xxlOffset,
    xxxlOffset,
  } = props

  // const smClass = sm ? s[`gc${sm}`] : '';
  // const smOffs = smOffset ? s[`offset${sm}`] : '';

  // const mdClass = md ? s[`mdgc${md}`] : '';
  // const mdOffs = mdOffset ? s[`mdoffset${md}`] : '';

  // const lgClass = lg ? s[`lggc${lg}`] : '';
  // const lgOffs = lgOffset ? s[`lgoffset${lg}`] : '';

  // const xlClass = xl ? s[`xlgc${xl}`] : '';
  // const xlOffs = xlOffset ? s[`xloffset${xl}`] : '';

  // const xxlClass = xxl ? s[`xxlgc${xxl}`] : '';
  // const xxlOffs = xxlOffset ? s[`xxloffset${xxl}`] : '';

  // const xxxlClass = xxxl ? s[`xxxlgc${xxxl}`] : '';
  // const xxxlOffs = xxxlOffset ? s[`xxxloffset${xxxl}`] : '';

  // smClass,
  // smOffs,

  // mdClass,
  // mdOffs,

  // lgClass,
  // lgOffs,

  // xlClass,
  // xlOffs,

  // xxlClass,
  // xxlOffs,

  // xxxlClass,
  // xxxlOffs,

  return (
    <div
      className={cn(
        sm && `sm-${sm}`,
        smOffset && `o-${smOffset}`,

        md && `md-${md}`,
        mdOffset && `o-md-${mdOffset}`,

        lg && `lg-${lg}`,
        lgOffset && `o-lg-${lgOffset}`,

        xl && `xl-${xl}`,
        xlOffset && `o-xl-${xlOffset}`,

        xxl && `xxl-${xxl}`,
        xxlOffset && `o-xxl-${xxlOffset}`,

        xxxl && `xxxl-${xxxl}`,
        xxxlOffset && `o-xxxl-${xxxlOffset}`,

        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Grid helper
export function GridHelper() {
  const [showGrid, setShowGrid] = useState(false)
  const [gridColumns, setGridColumns] = useState(false)

  useEffect(() => {
    // Columns
    setGridColumns(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--grid-columns"
      )
    )
  }, [])

  return (
    <>
      <button className={s.toggle} onClick={() => setShowGrid(!showGrid)}>
        {!showGrid ? "Grid" : "Hide"}
      </button>

      {showGrid && (
        <div className={s.grid}>
          <div className="row grid">
            {Array.from({ length: gridColumns }, (_, i) => (
              <div key={i}></div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

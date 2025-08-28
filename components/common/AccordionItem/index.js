import cn from "clsx"
import { useEffect, useRef, useState } from "react"
import s from "./AccordionItem.module.scss"

export default function AccordionItem({ title, text, children, className }) {
  const textRef = useRef(null)

  const [toggle, setToggle] = useState(true)
  const [height, setHeight] = useState()

  useEffect(() => {
    if (textRef.current) {
      setHeight(textRef.current.offsetHeight)
      setToggle(false)
    }
  }, [textRef])

  return (
    <div
      className={cn(s.container, "", className)}
      onClick={() => setToggle(!toggle)}
    >
      <div className={cn(s.title, "h4", toggle && height && s.isActive)}>
        <p> {title} </p>

        <button
          className={cn(s.toggle, toggle && s.isActive)}
          aria-label="Toggle"
        >
          <div>x</div>
        </button>
      </div>

      <div
        className={cn(s.text)}
        ref={textRef}
        style={{
          maxHeight: `${toggle ? height : 0}px`,
        }}
      >
        <div>
          {text && <p>{text}</p>}

          {children}
        </div>
      </div>
    </div>
  )
}

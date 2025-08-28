import clsx from "clsx"
import s from "./SectionHeading.module.scss"

export default function SectionHeading({
  title,
  text,
  className,
  leftAlign,
  children,
  ...props
}) {
  return (
    <div
      className={clsx(s.container, leftAlign && s.leftAlign, className)}
      {...props}
    >
      <h2>{title}</h2>
      {text && <p>{text}</p>}

      {children}
    </div>
  )
}

import clsx from "clsx"
import { useState } from "react"
import s from "./Input.module.scss"

export default function Input({
  label,
  className,
  onChange,
  required,
  hidden,
  ...props
}) {
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    if (!e.target.value) {
      setIsFocused(false)
    } else {
      setIsFocused(true)
    }
    setValue(e.target.value)
  }

  return (
    <div className={s.container} style={{ display: hidden ? "none" : "" }}>
      {label && (
        <label className={clsx(s.label, isFocused && s.isActive)}>
          {label} {required && <span className={s.required}>*</span>}
        </label>
      )}
      <input
        {...props}
        className={clsx(className, s.input)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
        onChange={(e) => {
          handleChange(e)
          if (onChange) {
            onChange(e)
          }
        }}
        autoComplete="nope"
        required={required}
      />
    </div>
  )
}

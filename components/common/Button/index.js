import clsx from "clsx"
import s from "./Button.module.scss"
import { useStore } from "@/lib/store"

export default function Button({
  children,
  color,
  toggleContactModal,
  className,
  onClick,
  ...props
}) {
  const { setContactModal } = useStore((state) => ({
    setContactModal: state.setContactModal,
  }))

  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }

    if (toggleContactModal) {
      setContactModal(true)
    }
  }

  return (
    <button
      className={clsx(s.container, className, color == "white" && s.white)}
      {...props}
      onClick={() => handleOnClick()}
    >
      {children}
    </button>
  )
}

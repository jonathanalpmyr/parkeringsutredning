import { Logo } from "@/components/common/Icons"
import { Col } from "../Grid"
import s from "./Header.module.scss"
import Button from "@/components/common/Button"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import clsx from "clsx"
import { useLenis } from "@studio-freight/react-lenis"

function getOffsetLeft(element) {
  if (!element) return 0

  const parent = element.offsetParent
  if (!parent) return element.offsetLeft

  // Get parent's padding-left
  const parentPaddingLeft = parseFloat(getComputedStyle(parent).paddingLeft)

  // Calculate the true offset excluding padding
  return element.offsetLeft - parentPaddingLeft
}

const navLinks = [
  { title: "Hur det funkar", id: "how-it-works" },
  { title: "Våra tjänster", id: "services" },
  { title: "Process", id: "process" },
  { title: "Om oss", id: "about" },
]

function getStyleProp(elem, prop) {
  if (window.getComputedStyle)
    return window.getComputedStyle(elem, null).getPropertyValue(prop)
  else if (elem.currentStyle) return elem.currentStyle[prop] //IE
}

export default function Header({}) {
  const triggers = useRef([])
  const menuRef = useRef()
  const [activeBorder, setActiveBorder] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [hover, setHover] = useState(null)
  const lenis = useLenis()

  // Get all triggers
  useEffect(() => {
    navLinks.forEach((item, i) => {
      if (item.id) {
        const id = document.getElementById(item.id)
        triggers.current.push(id)
      }
    })
  }, [])

  useGSAP(() => {
    if (triggers.current) {
      triggers?.current?.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          onEnter: (self) => {
            setCurrentSection(i)
          },
          onLeaveBack: (self) => {
            if (i !== 0) {
              setCurrentSection(i - 1)
            }
          },
        })
      })
    }
  }, [triggers])

  function handleOnClick(item) {
    lenis?.scrollTo("#" + item, {})
  }

  useEffect(() => {
    let currentItem = hover !== null ? hover : currentSection
    let currentNavItem = menuRef.current.querySelectorAll("li")[currentItem]
    let x
    if (currentNavItem) {
      x =
        currentNavItem.querySelector("button").offsetLeft -
        currentNavItem.parentNode.offsetLeft

      setActiveBorder({
        width: currentNavItem.querySelector("button").offsetWidth,
        x: x,
      })
    }
  }, [menuRef, currentSection, hover])

  return (
    <header className={s.container}>
      <div className={clsx(s.logo, "logo")}>
        <Logo />
      </div>
      <div className={s.nav}>
        {/* <button className={s.burger}>asdads</button> */}
        <nav className={clsx(s.menu, "text-invert")}>
          <ul ref={menuRef}>
            {navLinks.map((item, i) => (
              <li key={item.title}>
                <button
                  className={clsx(s.link, currentSection == i && s.isActive)}
                  onClick={(e) => handleOnClick(item.id)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
          {activeBorder && (
            <div
              className={s.activeBorder}
              style={{
                width: activeBorder.width,
                transform: `translateX(${activeBorder.x}px)`,
              }}
            />
          )}
        </nav>
      </div>
      <div className={s.button}>
        <div className={s.buttonWrap}>
          <Button toggleContactModal>Kom igång</Button>
        </div>
      </div>
    </header>
  )
}

import useClickOutside from "@/lib/hooks/useClickOutside"
import { useStore } from "@/lib/store"
import { useGSAP } from "@gsap/react"
import { useLenis } from "@studio-freight/react-lenis"
import { default as clsx, default as cn } from "clsx"
import gsap from "gsap"
import Image from "next/image"
import { useCallback, useEffect, useRef } from "react"
import { BiX } from "react-icons/bi"
import { services } from "../Services"
import Button from "../common/Button"
import Input from "../common/Input"
import s from "./Modal.module.scss"

export default function Modal() {
  const containerRef = useRef()
  const wrapRef = useRef()
  const contentRef = useRef()
  const closeRef = useRef()
  const tlRef = useRef()
  const imageRef = useRef()

  const lenis = useLenis()

  const { contactModal, selectedService, setContactModal, setSelectedService } =
    useStore((state) => ({
      contactModal: state.contactModal,
      setContactModal: state.setContactModal,
      selectedService: state.selectedService,
      setSelectedService: state.setSelectedService,
    }))

  function handleClose() {
    // click()
    close()
  }

  useEffect(() => {
    document.onkeyup = function (e) {
      if (e.key == "Escape") {
        handleClose()
      }
    }
  }, [])

  const close = useCallback(() => setContactModal(false))
  useClickOutside(wrapRef, close)

  useGSAP(() => {
    tlRef.current = gsap.timeline({ paused: true })
    if (containerRef.current) {
      tlRef.current.fromTo(
        containerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.66,
          ease: "expo.out",
        },
        "0"
      )

      tlRef.current.fromTo(
        wrapRef.current,
        {
          opacity: 0,
          yPercent: 100,
          // scale: 0.3,
          // yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          // scale: 1,
          // yPercent: 0,
          duration: 1,
          ease: "expo.out",
        },
        "-=80%"
      )

      tlRef.current.from(
        imageRef.current,
        {
          scale: 1.3,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        },
        "-=80%"
      )

      // tlRef.current.fromTo(
      //   [closeRef.current, contentRef.current.children],
      //   {
      //     scale: 0,
      //     opacity: 0,
      //   },
      //   {
      //     scale: 1,
      //     opacity: 1,
      //     duration: 1,
      //     stagger: 0.07,
      //     ease: "expo.out",
      //   },
      //   ".3"
      // )
    }
  }, [])

  useEffect(() => {
    if (contactModal) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [contactModal])

  useGSAP(() => {
    if (contactModal) {
      tlRef.current.reversed(false).timeScale(1)
      tlRef.current.play()
    } else {
      tlRef.current.reversed(true).timeScale(2)
      tlRef.current.reverse()
    }
  }, [contactModal])

  // if (!welcomeModal) {
  //   return null
  // }

  return (
    <div
      className={cn(s.container, contactModal && s.isActive)}
      ref={containerRef}
    >
      <div className={cn(s.wrap)} ref={wrapRef} data-lenis-prevent>
        <div className={s.image}>
          <div ref={imageRef}>
            <Image src="/paul_adetoun.webp" fill alt="" />
          </div>
        </div>
        <div className={s.content} ref={contentRef}>
          <h2 className="h3">Kom igång</h2>
          {/* <p>sadasdasd</p> */}

          <h2 className="h4">Vilken tjänst är du intresserad av?</h2>
          {services && (
            <ul className={s.services}>
              {services.map((service, i) => (
                <li key={service.title}>
                  <Button
                    style={{
                      opacity: selectedService == service.title ? 1 : 0.5,
                    }}
                    onClick={() => setSelectedService(service.title)}
                  >
                    {service.title}
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <form className={s.form}>
            <Input
              label="Namn"
              type="text"
              name="name"
              required
              // onChange={(e) =>
              //     setFirstName(e.target.value)
              // }
            />

            <Input
              label="Epost"
              type="email"
              name="email"
              required
              // onChange={(e) =>
              //     setFirstName(e.target.value)
              // }
            />

            <Button type="submit">Skicka</Button>
          </form>
        </div>

        <div className={clsx(s.close)} ref={closeRef}>
          <button
            onClick={() => {
              handleClose()
            }}
          >
            <BiX />
          </button>
        </div>
      </div>
    </div>
  )
}

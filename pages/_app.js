import { GridHelper } from "@/components/Layout/Grid"
import Header from "@/components/Layout/Header"
import Modal from "@/components/Modal"
import RealViewport from "@/components/RealViewport"
import SmoothScroll from "@/components/SmoothScroll"
import "@/styles/globals.scss"
import clsx from "clsx"
import localFont from "next/font/local"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--body-font",
  weight: "100 900",
})
export default function App({ Component, pageProps }) {
  return (
    <div className={clsx("page", geistSans.variable)}>
      <GridHelper />

      <Header />

      <RealViewport />

      <Modal />

      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </div>
  )
}

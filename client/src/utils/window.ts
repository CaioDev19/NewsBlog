import { RefObject } from "react"

export function scrollToRef(ref?: RefObject<HTMLDivElement>) {
  if (!ref?.current) return
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function scrollToTop() {
  window.scrollTo(0, 0)
}

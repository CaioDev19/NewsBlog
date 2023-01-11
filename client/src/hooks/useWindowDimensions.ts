import { useEffect, useState } from "react"

interface WindowDimensions {
  width: number | undefined
  height: number | undefined
}

export function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimensions>({
      width: undefined,
      height: undefined,
    })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    if (
      typeof windowDimensions.width === "undefined" &&
      typeof windowDimensions.height === "undefined"
    ) {
      handleResize()
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [windowDimensions.height, windowDimensions.width])

  return windowDimensions
}

import { useEffect, useState } from "react"

interface WindowDimensions {
  width: number | undefined
  height: number | undefined
  url: string | undefined
}

export function useWindow(): WindowDimensions {
  const [windowValues, setWindow] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
    url: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindow({
        width: window.innerWidth,
        height: window.innerHeight,
        url: window.location.href,
      })
    }

    if (
      typeof windowValues.width === "undefined" &&
      typeof windowValues.height === "undefined"
    ) {
      handleResize()
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [windowValues.height, windowValues.width])

  return windowValues
}

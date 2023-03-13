import { useState } from "react"

export function useToggle() {
  const [isToggled, setIsToggled] = useState(false)

  const toggle = () => setIsToggled((prev) => !prev)

  return [isToggled, toggle] as const
}

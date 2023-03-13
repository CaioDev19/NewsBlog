import { useEffect, useState, Dispatch, useCallback } from "react"

function getLocalStorageValue<T>(
  key: string,
  initialValue: T | (() => T)
): T {
  const localStorageString = localStorage.getItem(key)

  if (typeof localStorageString === "string") {
    const localStorageValue = JSON.parse(localStorageString)
    return localStorageValue
  }

  if (initialValue instanceof Function) {
    return initialValue()
  }

  return initialValue
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T) = "" as T
): [T, Dispatch<React.SetStateAction<T>>, () => void] {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, initialValue)
  })

  const remove = useCallback(
    function (): void {
      localStorage.removeItem(key)
      setValue("" as T)
    },
    [key]
  )

  useEffect((): void => {
    if (!value) {
      return
    }
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue, remove]
}

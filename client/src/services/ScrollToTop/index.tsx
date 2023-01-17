import React, { useEffect } from "react"
import { Outlet, useLocation } from "react-router"

export function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Outlet />
    </>
  )
}

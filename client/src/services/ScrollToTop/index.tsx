import React, { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { scrollToTop } from "../../utils/window"

export function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    scrollToTop()
  }, [location])

  return (
    <>
      <Outlet />
    </>
  )
}

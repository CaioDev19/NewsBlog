import * as Sc from "./style"
import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Footer } from "../Footer"

export function MainNavigation() {
  return (
    <>
      <Header />
      <Sc.Container>
        <Outlet />
      </Sc.Container>
      <Footer />
    </>
  )
}

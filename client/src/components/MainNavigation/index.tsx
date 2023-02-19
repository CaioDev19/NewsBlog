import * as Sc from "./style"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { MenuAdm } from "../../pages/Admin/components/MenuAdmin"
import { useAuth } from "../../hooks/useAuth"

export function MainNavigation() {
  const { token } = useAuth()

  return (
    <>
      <Header />
      <Sc.Container>
        <Outlet />
      </Sc.Container>
      <Footer />
      {token && <MenuAdm />}
    </>
  )
}

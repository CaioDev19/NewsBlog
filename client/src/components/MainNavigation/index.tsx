import * as Sc from "./style"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { MenuAdm } from "../../pages/Admin/components/MenuAdmin"
import { useAuth } from "../../hooks/useAuth"

export function MainNavigation({
  children,
}: {
  children: React.ReactNode
}) {
  const { token } = useAuth()

  return (
    <>
      <Header />
      <Sc.Container>{children}</Sc.Container>
      <Footer />
      {token && <MenuAdm />}
    </>
  )
}

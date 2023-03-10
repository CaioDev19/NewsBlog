import { RiAdminFill } from "react-icons/ri"
import { useToggle } from "../../../hooks/useToggle"
import { motion, AnimatePresence } from "framer-motion"
import * as Sc from "./style"
import { useAuth } from "../../../hooks/useAuth"

export function MenuAdm() {
  const [open, toggle] = useToggle()
  const { logOut } = useAuth()
  const variants = {
    open: { opacity: 1, y: "0%" },
    closed: { opacity: 0, y: "100%" },
  }

  return (
    <>
      {open && <Sc.OverLayToggle onClick={toggle} />}
      <Sc.Container>
        <AnimatePresence>
          {open && (
            <Sc.MenuContainer
              as={motion.div}
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              <Sc.Link href="/admin/criar-noticia">Nóticia</Sc.Link>
              <Sc.Link href="/admin/anuncio">Anúncio</Sc.Link>
              <Sc.Link as="span" onClick={logOut}>
                Sair
              </Sc.Link>
            </Sc.MenuContainer>
          )}
        </AnimatePresence>
        <Sc.AdmBtn as={RiAdminFill} onClick={toggle} />
      </Sc.Container>
    </>
  )
}

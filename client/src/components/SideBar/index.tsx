import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import logo from "../../assets/images/logo.png"
import { IoIosCloseCircle } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  handleToggle: () => void
  isOpen: boolean
}

export function MobileSideBar({ handleToggle, isOpen }: Props) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Sc.StyledMobileSideBar
          as={motion.div}
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
        >
          <Sc.CloseBtn as={IoIosCloseCircle} onClick={handleToggle} />
          <Sc.Logo src={logo} alt="logo" />
          <Sc.Nav>
            <Text type="paragraph" as="li">
              Home
            </Text>
            <Text type="paragraph" as="li">
              Notícias
            </Text>
            <Text type="paragraph" as="li">
              Sobre Nós
            </Text>
            <Text type="paragraph" as="li">
              Contato
            </Text>
          </Sc.Nav>
        </Sc.StyledMobileSideBar>
      )}
    </AnimatePresence>
  )
}

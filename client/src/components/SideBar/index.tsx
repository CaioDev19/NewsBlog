import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import logo from "../../assets/images/logo.png"
import { IoIosCloseCircle } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineHome } from "react-icons/ai"
import { GiNewspaper } from "react-icons/gi"
import { BsInfoCircle } from "react-icons/bs"
import { TiContacts } from "react-icons/ti"
import { useNavigate } from "react-router-dom"

interface Props {
  handleToggle: () => void
  isOpen: boolean
}

export function MobileSideBar({ handleToggle, isOpen }: Props) {
  const navigate = useNavigate()
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
          <Sc.UpperContent>
            <Sc.Logo src={logo} alt="logo" />
            <Sc.Nav>
              <Text
                type="paragraph"
                as="li"
                onClick={() => navigate("/")}
              >
                <AiOutlineHome /> Home
              </Text>
              <Text type="paragraph" as="li">
                <GiNewspaper /> Notícias
              </Text>
              <Text type="paragraph" as="li">
                <BsInfoCircle /> Sobre Nós
              </Text>
              <Text type="paragraph" as="li">
                <TiContacts /> Contato
              </Text>
            </Sc.Nav>
          </Sc.UpperContent>
          <Sc.DateWrapper>
            <Text
              type="span"
              as="span"
              size="rgl"
              color="black_200"
              weight="sstr"
            >
              Hoje
            </Text>
            <Text type="paragraph" size="rgl">
              é 25 / 05 / 2021
            </Text>
          </Sc.DateWrapper>
        </Sc.StyledMobileSideBar>
      )}
    </AnimatePresence>
  )
}

import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import logo from "../../assets/images/logo3-portal-m-bonfim.svg"
import { IoIosCloseCircle } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineHome } from "react-icons/ai"
import { GiNewspaper } from "react-icons/gi"
import { BsInfoCircle } from "react-icons/bs"
import { useToggle } from "../../hooks/useToggle"
import { useCategories } from "../../hooks/react-query/query/useCategories"
import { useNavigate } from "react-router-dom"

interface Props {
  handleToggle: () => void
  isOpen: boolean
}

export function MobileSideBar({ handleToggle, isOpen }: Props) {
  const [isMenuOpen, toggle] = useToggle()
  const navigate = useNavigate()
  const { isSuccess, data } = useCategories()
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
              <Sc.Link onClick={() => navigate("/")}>
                <AiOutlineHome /> Home
              </Sc.Link>
              <Sc.LiRelative>
                <Sc.Link as="span" onClick={toggle}>
                  <GiNewspaper /> Notícias
                </Sc.Link>
                <AnimatePresence>
                  {isMenuOpen && (
                    <Sc.NewsMenu
                      as={motion.ul}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {isSuccess &&
                        data?.data.map((category) => (
                          <Sc.Link
                            key={category.id}
                            onClick={() => {
                              toggle()
                              navigate(
                                `/notícia/categoria/${category.id}`
                              )
                            }}
                          >
                            {category.name}
                          </Sc.Link>
                        ))}
                    </Sc.NewsMenu>
                  )}
                </AnimatePresence>
              </Sc.LiRelative>
              <Sc.Link>
                <BsInfoCircle /> Sobre Nós
              </Sc.Link>
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

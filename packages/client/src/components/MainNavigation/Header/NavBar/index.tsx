import * as Sc from "./style"
import { ContentContainer } from "../../../../global/styles/ContentContainer"
import { SlArrowDown } from "react-icons/sl"
import { useToggle } from "../../../../hooks/useToggle"
import { motion, AnimatePresence } from "framer-motion"
import { useCategories } from "../../../../hooks/react-query/query/useCategories"

export function NavBar() {
  const { isSuccess, data } = useCategories()
  const [isOpen, toggle] = useToggle()

  return (
    <Sc.ContainerNav>
      <ContentContainer>
        <Sc.Nav>
          <Sc.Link to="/">HOME</Sc.Link>
          <Sc.LiRelative>
            <Sc.Link as="span" onClick={toggle}>
              NOTÍCIAS <SlArrowDown />
            </Sc.Link>
            <AnimatePresence>
              {isOpen && (
                <>
                  <Sc.NewsMenuToggle onClick={toggle} />
                  <Sc.NewsMenu
                    as={motion.ul}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {isSuccess &&
                      data?.map((category) => (
                        <Sc.Link
                          key={category.id}
                          to={`/noticia/categoria/${category.id}`}
                          onClick={() => {
                            toggle()
                          }}
                        >
                          {category.name}
                        </Sc.Link>
                      ))}
                  </Sc.NewsMenu>
                </>
              )}
            </AnimatePresence>
          </Sc.LiRelative>
          <Sc.Link to="/sobre-nos">SOBRE NÓS</Sc.Link>
        </Sc.Nav>
      </ContentContainer>
    </Sc.ContainerNav>
  )
}

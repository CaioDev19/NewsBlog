import * as Sc from "./style"
import { ContentContainer } from "../../../../global/styles/ContentContainer"
import { SlArrowDown } from "react-icons/sl"
import { useToggle } from "../../../../hooks/useToggle"
import { motion, AnimatePresence } from "framer-motion"
import { useCategories } from "../../../../hooks/react-query/query/useCategories"
import { useNavigate } from "react-router-dom"

export function NavBar() {
  const { isSuccess, data } = useCategories()
  const [isOpen, toggle] = useToggle()
  const navigate = useNavigate()

  return (
    <Sc.ContainerNav>
      <ContentContainer>
        <Sc.Nav>
          <li>
            <Sc.Link onClick={() => navigate("/")}>HOME</Sc.Link>
          </li>
          <Sc.LiRelative>
            <Sc.Link as="span" onClick={toggle}>
              NOTÍCIAS <SlArrowDown />
            </Sc.Link>
            <AnimatePresence>
              {isOpen && (
                <Sc.NewsMenu
                  as={motion.ul}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {isSuccess &&
                    data?.data.map((category) => (
                      <li key={category.id}>
                        <Sc.Link
                          onClick={() => {
                            toggle()
                            navigate(`/post/category/${category.id}`)
                          }}
                        >
                          {category.name}
                        </Sc.Link>
                      </li>
                    ))}
                </Sc.NewsMenu>
              )}
            </AnimatePresence>
          </Sc.LiRelative>
          <li>
            <Sc.Link>SOBRE NÓS</Sc.Link>
          </li>
          <li>
            <Sc.Link>CONTATO</Sc.Link>
          </li>
        </Sc.Nav>
      </ContentContainer>
    </Sc.ContainerNav>
  )
}

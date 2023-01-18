import * as Sc from "./style"
import { ContentContainer } from "../../../../global/styles/ContentContainer"
import { SlArrowDown } from "react-icons/sl"
import { useToggle } from "../../../../hooks/useToggle"
import { motion, AnimatePresence } from "framer-motion"

export function NavBar() {
  const [isOver, toggle] = useToggle()

  return (
    <Sc.ContainerNav>
      <ContentContainer>
        <Sc.Nav>
          <li>
            <Sc.Link to="/">HOME</Sc.Link>
          </li>
          <Sc.LiRelative>
            <Sc.Link as="span" onClick={toggle}>
              NOTÍCIAS <SlArrowDown />
            </Sc.Link>
            <AnimatePresence>
              {isOver && (
                <Sc.NewsMenu
                  as={motion.ul}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <li>
                    <Sc.Link
                      onClick={toggle}
                      to="post/category/business"
                    >
                      Business
                    </Sc.Link>
                  </li>
                  <li>
                    <Sc.Link
                      onClick={toggle}
                      to="post/category/entertainment"
                    >
                      Entertainment
                    </Sc.Link>
                  </li>
                  <li>
                    <Sc.Link
                      onClick={toggle}
                      to="post/category/general"
                    >
                      General
                    </Sc.Link>
                  </li>
                  <li>
                    <Sc.Link
                      onClick={toggle}
                      to="post/category/health"
                    >
                      Health
                    </Sc.Link>
                  </li>
                  <li>
                    <Sc.Link
                      onClick={toggle}
                      to="post/category/science"
                    >
                      Science
                    </Sc.Link>
                  </li>
                  <li>
                    <Sc.Link
                      onClick={toggle}
                      to="post/category/sports"
                    >
                      Sports
                    </Sc.Link>
                  </li>
                  <li>
                    <Sc.Link
                      onClick={toggle}
                      to="post/category/technology"
                    >
                      Technology
                    </Sc.Link>
                  </li>
                </Sc.NewsMenu>
              )}
            </AnimatePresence>
          </Sc.LiRelative>
          <li>
            <Sc.Link to="/">SOBRE NÓS</Sc.Link>
          </li>
          <li>
            <Sc.Link to="/">CONTATO</Sc.Link>
          </li>
        </Sc.Nav>
      </ContentContainer>
    </Sc.ContainerNav>
  )
}

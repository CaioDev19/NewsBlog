import * as Sc from "./style"
import { ContentContainer } from "../../../global/styles/ContentContainer"

export function NavBar() {
  return (
    <Sc.ContainerNav>
      <ContentContainer>
        <Sc.Nav>
          <li>
            <Sc.Link to="/">Home</Sc.Link>
          </li>
          <li>
            <Sc.Link to="/">Notícias</Sc.Link>
          </li>
          <li>
            <Sc.Link to="/">Sobre Nós</Sc.Link>
          </li>
          <li>
            <Sc.Link to="/">Contato</Sc.Link>
          </li>
        </Sc.Nav>
      </ContentContainer>
    </Sc.ContainerNav>
  )
}

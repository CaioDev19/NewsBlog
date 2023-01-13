import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { ContentContainer } from "../../../global/styles/ContentContainer"
import { useNavigate } from "react-router-dom"

export function NavBar() {
  const navigate = useNavigate()

  return (
    <Sc.ContainerNav>
      <ContentContainer>
        <Sc.Nav>
          <Text
            type="paragraph"
            as="li"
            onClick={() => navigate("/")}
          >
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
      </ContentContainer>
    </Sc.ContainerNav>
  )
}

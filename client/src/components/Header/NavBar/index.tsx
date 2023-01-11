import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"

export function NavBar() {
  return (
    <Sc.ContainerNav>
      <Sc.WrapperNav>
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
      </Sc.WrapperNav>
    </Sc.ContainerNav>
  )
}

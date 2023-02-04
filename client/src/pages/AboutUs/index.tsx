import * as Sc from "./style"
import image from "../../assets/images/salvador-31.jpg"
import { Text } from "../../global/styles/Typography"

export function AboutUs() {
  return (
    <Sc.Container>
      <Sc.Image src={image} />
      <Sc.RightContent>
        <Text
          type="paragraph"
          as="p"
          position="left"
          color="black_200"
        >
          Eu possuo conhecimento sólido em HTML, CSS e JavaScript, bem
          como familiaridade com o framework React. Além disso, possuo
          experiência em ferramentas de desenvolvimento como o Git,
          npm, e tenho familiaridade com algumas bibliotecas no React
          como react-query, react-hook-forms, react-icons, zod e
          framer-motion. Sou capaz de criar componentes reutilizáveis
          e integrar a interface do usuário com APIs de back-end. Sou
          também capaz de solucionar problemas de compatibilidade de
          navegador e garantir que a interface do usuário seja
          responsiva em diferentes dispositivos.
        </Text>
        <Text
          type="title"
          as="h1"
          weight="str"
          size="exl"
          position="left"
        >
          Caio Araújo
        </Text>
        <Text
          type="title"
          as="span"
          weight="wek"
          size="lrg"
          position="left"
          color="gray_200"
        >
          Programador Full Stack
        </Text>
      </Sc.RightContent>
    </Sc.Container>
  )
}

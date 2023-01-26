import * as Sc from "./style"
import logo from "../../../assets/images/logo2-portal-m-bonfim.svg"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Text } from "../../../global/styles/Typography"
import { useForm } from "react-hook-form"
import { Button } from "../../../global/styles/Button"
import { AiOutlineArrowUp } from "react-icons/ai"
import { scrollToTop } from "../../../utils/window"
import { NewsLetterSchema } from "../../../global/validators/newsLetterSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export function Footer() {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(NewsLetterSchema),
    defaultValues: {
      nome: "",
      email: "",
    },
  })

  function handleSucessSubmit(data: any) {
    console.log(data)
  }

  function handleErrorSubmit(error: any) {
    console.log(error)
  }

  return (
    <Sc.Container>
      <Sc.MainContainer>
        <Sc.InfoContainer>
          <Sc.Logo src={logo} alt="logo" />
          <Text
            type="paragraph"
            size="rgl"
            color="white"
            position="justify"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sequi ullam eveniet molestiae itaque accusantium? Non
            reprehenderit consequuntur necessitatibus molestiae sequi
            porro quo, deserunt, natus, atque consequatur dicta
            ducimus tempora voluptates!
          </Text>
          <Sc.SocialMediaWrapper>
            <Sc.SocialMedia as={AiOutlineFacebook} />
            <Sc.SocialMedia as={BsInstagram} />
            <Sc.SocialMedia as={BsWhatsapp} />
          </Sc.SocialMediaWrapper>
        </Sc.InfoContainer>

        <Sc.Form
          onSubmit={handleSubmit(
            handleSucessSubmit,
            handleErrorSubmit
          )}
        >
          <Text type="title" as="h3" color="white" weight="wek">
            RECEBA NOSSAS NOVIDADES
          </Text>
          <Sc.SInput
            type="text"
            name="name"
            placeholder="Insira seu nome"
            control={control}
          />
          <Sc.SInput
            type="email"
            name="email"
            placeholder="Insira seu e-mail"
            control={control}
          />
          <Button type="submit" size="sml">
            Enviar
          </Button>
        </Sc.Form>
      </Sc.MainContainer>
      <Sc.ContainerBackTop>
        <Text type="title" as="h4" color="white" weight="wek">
          DE VOLTA AO TOPO
        </Text>
        <Sc.ArrowUp as={AiOutlineArrowUp} onClick={scrollToTop} />
      </Sc.ContainerBackTop>
    </Sc.Container>
  )
}

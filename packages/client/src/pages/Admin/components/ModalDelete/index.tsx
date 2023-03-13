import { createPortal } from "react-dom"
import * as Sc from "./style"
import { Text } from "../../../../global/styles/Typography"
import { useWindow } from "../../../../hooks/useWindow"
import { useTheme } from "styled-components"

interface Props {
  toggle: () => void
  handleDelete: () => void
}
export function ModalDelete({ toggle, handleDelete }: Props) {
  const { width } = useWindow()
  const theme = useTheme()

  return createPortal(
    <>
      <Sc.Overlay
        onClick={(e) => {
          e.stopPropagation()
          toggle()
        }}
      />
      <Sc.Container>
        <Text
          type="title"
          as="h2"
          size={width! > theme.BREAKPOINTS.mobile ? "exl" : "lrg"}
          color="white"
          weight="str"
        >
          Tem certeza que deseja deletar?
        </Text>
        <Sc.ButtonContainer>
          <Sc.SButton
            size="lrg"
            color="white"
            background="blue"
            onClick={(e) => {
              e.stopPropagation()
              toggle()
            }}
          >
            <Text
              type="span"
              size={width! > theme.BREAKPOINTS.mobile ? "rgl" : "sml"}
              as="span"
              color="white"
            >
              NÃO
            </Text>
          </Sc.SButton>
          <Sc.SButton
            size="lrg"
            color="white"
            background="red"
            onClick={(e) => {
              e.stopPropagation()
              handleDelete()
              toggle()
            }}
          >
            <Text
              type="span"
              size={width! > theme.BREAKPOINTS.mobile ? "rgl" : "sml"}
              as="span"
              color="white"
            >
              SIM
            </Text>
          </Sc.SButton>
        </Sc.ButtonContainer>
      </Sc.Container>
    </>,
    document.getElementById("modal-root") as HTMLElement
  )
}

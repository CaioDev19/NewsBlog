import { createPortal } from "react-dom"
import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"

interface Props {
  toggle: () => void
  handleDelete: () => void
}
export function ModalDelete({ toggle, handleDelete }: Props) {
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
          size="exl"
          color="white"
          weight="str"
        >
          Tem certeza que deseja deletar?
        </Text>
        <Sc.ButtonContainer>
          <Sc.Button
            color="red"
            onClick={(e) => {
              e.stopPropagation()
              handleDelete()
              toggle()
            }}
          >
            <Text type="span" size="rgl" as="span" color="white">
              SIM
            </Text>
          </Sc.Button>
          <Sc.Button
            color="blue"
            onClick={(e) => {
              e.stopPropagation()
              toggle()
            }}
          >
            <Text type="span" size="rgl" as="span" color="white">
              NÃO
            </Text>
          </Sc.Button>
        </Sc.ButtonContainer>
      </Sc.Container>
    </>,
    document.getElementById("modal-root") as HTMLElement
  )
}

import { Spinner } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { RouterOutput } from "server"
import { Text } from "../../../../../global/styles/Typography"
import { useDeleteAd } from "../../../../../hooks/react-query/mutation/useDeleteAd"
import { useToggle } from "../../../../../hooks/useToggle"
import { ModalDelete } from "../../ModalDelete"
import * as Sc from "./style"

interface Props {
  data: RouterOutput["advertising"]["list"]["advertisings"][0]
}

export function Ad({ data: { image, id, status } }: Props) {
  const [isOpen, toggle] = useToggle()
  const { mutate, isError, isLoading } = useDeleteAd()

  function handleDelete() {
    mutate(id)
  }

  return (
    <>
      <Sc.Container>
        <Sc.AdImage src={image.url} alt={image.name} />
        <Text
          type="title"
          as="h2"
          size="lrg"
          weight="str"
          position="left"
        >
          {status}
        </Text>
        <Sc.Trash>
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              variant="secondary"
              size="sm"
            />
          ) : (
            <BsFillTrashFill
              size={20}
              onClick={(e) => {
                e.stopPropagation()
                toggle()
              }}
            />
          )}
        </Sc.Trash>
        {isError && (
          <Text
            type="span"
            as="span"
            color="red"
            weight="str"
            size="sml"
          >
            Erro ao deletar o anúncio
          </Text>
        )}
      </Sc.Container>
      {isOpen && (
        <ModalDelete toggle={toggle} handleDelete={handleDelete} />
      )}
    </>
  )
}

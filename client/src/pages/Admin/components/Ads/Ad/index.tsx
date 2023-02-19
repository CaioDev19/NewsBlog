import { Spinner } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { Text } from "../../../../../global/styles/Typography"
import { useDeleteAd } from "../../../../../hooks/react-query/mutation/useDeleteAd"
import { useToggle } from "../../../../../hooks/useToggle"
import { Advertising } from "../../../../../interfaces/api"
import { ModalDelete } from "../../ModalDelete"
import * as Sc from "./style"

interface Props {
  data: Advertising
}

export function Ad({ data: { image, id } }: Props) {
  const [isOpen, toggle] = useToggle()
  const { mutate, isError, isLoading } = useDeleteAd()

  function handleDelete() {
    mutate(id)
  }

  return (
    <>
      <Sc.Container>
        <Sc.AdImage src={image.url} alt={image.name} />
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

import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { ShareButton } from "../../ShareButton"
import { useWindow } from "../../../hooks/useWindow"
import { Editor } from "../../Editor"
import { useAuth } from "../../../hooks/useAuth"
import { BsFillTrashFill } from "react-icons/bs"
import { FaPencilAlt } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { useDeletePost } from "../../../hooks/react-query/mutation/useDeletePost"
import { Spinner } from "react-bootstrap"
import { Size } from "../../../interfaces/component"
import { useToggle } from "../../../hooks/useToggle"
import { ModalDelete } from "../../../pages/Admin/components/ModalDelete"
import { useTheme } from "styled-components"
import { formatDateBrazil } from "../../../utils/date"
import { RouterOutput } from "server"

interface Props {
  news: RouterOutput["post"]["listById"]
  size?: Size
  primary?: boolean
  variant?: "light" | "dark"
}

export function New({ news, size, primary, variant }: Props) {
  const { url, width } = useWindow()
  const { id: idUrl } = useParams()
  const { token } = useAuth()
  const navigate = useNavigate()
  const { mutate, isError, isLoading } = useDeletePost()
  const [isOpen, toggle] = useToggle()
  const theme = useTheme()

  function handleDelete() {
    mutate(news.id)
  }

  function handleUpdate(e: any) {
    e.stopPropagation()
    navigate(`/admin/editar/${news.id}`)
  }

  if (primary) {
    return (
      <Sc.PrimaryContainer>
        <Text
          type="title"
          as="h2"
          size={"exl"}
          weight="str"
          position="left"
        >
          {news.title}
        </Text>
        <Sc.PrimaryNewsInfo>
          <Sc.InfoWrapper>
            <Text
              type="span"
              as="span"
              size={"lrg"}
              position="left"
              color="gray_200"
            >
              Postado em {formatDateBrazil(news.date as string)}
            </Text>
          </Sc.InfoWrapper>
          <Text
            type="span"
            as="span"
            size="lrg"
            position="left"
            color="blue"
            pointer
          >
            {news.category.name}
          </Text>
        </Sc.PrimaryNewsInfo>
        <Sc.PrimaryImage src={news.image.url} />
        <Editor theme="bubble" body={news.content} type="show" />
        <Sc.ShareContainer>
          <Text
            type="span"
            as="span"
            size="lrg"
            position="left"
            weight="str"
          >
            COMPARTILHE:
          </Text>
          <ShareButton social="facebook" url={url!} />
          <ShareButton social="twitter" url={url!} />
          <ShareButton social="whatsapp" url={url!} />
        </Sc.ShareContainer>
      </Sc.PrimaryContainer>
    )
  }

  return (
    <Sc.New
      size={size}
      onClick={() => {
        if (Number(idUrl) === news.id) return
        navigate(`/noticia/${news.id}`)
      }}
    >
      <Sc.NewImage
        size={size}
        src={news.image.url}
        alt={news.image.name}
      />
      <Sc.NewInfo>
        <Sc.Flex>
          <Text
            type="span"
            as="span"
            size={
              size === "sml" && width! > theme.BREAKPOINTS.notbook
                ? "rgl"
                : "lrg"
            }
            weight={variant === "light" ? "str" : "wek"}
            position="left"
            color={variant === "light" ? "gray_100" : "black"}
          >
            {news.title}
          </Text>
          <Text
            type="span"
            as="span"
            size={
              size === "sml" && width! > theme.BREAKPOINTS.notbook
                ? "sml"
                : "rgl"
            }
            position="center"
            weight={variant === "light" ? "str" : "wek"}
            color="blue"
            pointer
          >
            {news.category.name}
          </Text>
        </Sc.Flex>
        {size === "lrg" && (
          <Text
            type="paragraph"
            as="p"
            color="black"
            position="justify"
          >
            {news.summary}
          </Text>
        )}
        <Text
          type="span"
          as="span"
          color={variant === "light" ? "gray_100" : "gray_200"}
          weight="str"
          size={
            size === "sml" && width! > theme.BREAKPOINTS.notbook
              ? "sml"
              : "rgl"
          }
          position="left"
        >
          Postado em {formatDateBrazil(news.date as string)}
        </Text>
        {token && (
          <>
            <Sc.AdminButtons>
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
                  color={variant === "light" ? "white" : ""}
                />
              )}
              <FaPencilAlt
                size={20}
                onClick={handleUpdate}
                color={variant === "light" ? "white" : ""}
              />
            </Sc.AdminButtons>
            {isError && (
              <Text
                type="span"
                as="span"
                color="red"
                weight="str"
                size="sml"
              >
                Erro ao deletar postagem
              </Text>
            )}
            {isOpen && (
              <ModalDelete
                toggle={toggle}
                handleDelete={handleDelete}
              />
            )}
          </>
        )}
      </Sc.NewInfo>
    </Sc.New>
  )
}

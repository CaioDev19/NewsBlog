import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { Article } from "../../../interfaces/api"
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

interface Props {
  news: Article
  size?: Size
  primary?: boolean
  variant?: "light" | "dark"
}

export function New({ news, size, primary, variant }: Props) {
  const { url } = useWindow()
  const { id: idUrl } = useParams()
  const { token } = useAuth()
  const navigate = useNavigate()
  const { mutate, isError, isLoading } = useDeletePost()
  const [isOpen, toggle] = useToggle()

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
          <Text
            type="span"
            as="span"
            size={"lrg"}
            position="left"
            color="gray_200"
          >
            Postado em {new Date(news.date).toLocaleDateString()}
          </Text>
          |
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
            size="lrg"
            weight={variant === "light" ? "str" : "wek"}
            position="center"
            color={variant === "light" ? "gray_100" : "black"}
          >
            {news.title}
          </Text>
          <Text
            type="span"
            as="span"
            size="rgl"
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
          size="rgl"
        >
          Postado em {new Date(news.date).toLocaleDateString()}
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

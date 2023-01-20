import * as Sc from "./style"
import { Spinner } from "react-bootstrap"
import { useImageAsBackground } from "../../../hooks/useImageAsBackground"
import { Text } from "../../../global/styles/Typography"
import { IoCloudUploadOutline } from "react-icons/io5"
import { FaTrash } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { Input } from "../../../components/Form/Input"
import { Select } from "../../../components/Form/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { PostSchema } from "../../../global/validators/postSchema"
import { Editor } from "../../../components/Editor"
import { useState } from "react"

export function CreatePost() {
  const {
    image,
    isLoading: isImageLoading,
    isError,
    addImage,
    removeImage,
  } = useImageAsBackground()
  const {
    handleSubmit,
    control,
    resetField,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      sinopse: "",
      category: "",
      image: null as FileList | null,
    },
  })
  const [body, setBody] = useState("")
  const imageRegister = register("image")

  function handleSucessSubmit(data: any) {
    if (body === "") {
      return
    }
    console.log(data)
    console.log(body)
  }

  function handleErrorSubmit(error: any) {
    console.log(error)
  }

  function handleBody(body: string) {
    setBody(body)
  }

  return (
    <Sc.MainContainer>
      <Editor setBody={handleBody} />
      <Sc.Container>
        <Sc.Form
          onSubmit={handleSubmit(
            handleSucessSubmit,
            handleErrorSubmit
          )}
        >
          <Sc.UpperContent>
            <Sc.InnerWrapper noPadding={!!image}>
              {isImageLoading && (
                <Spinner
                  as="div"
                  animation="border"
                  variant="danger"
                />
              )}
              {(isError || errors.image?.type === "custom") && (
                <Text
                  type="span"
                  as="span"
                  size="rgl"
                  color="orange_red"
                >
                  Arquivo não suportado!
                </Text>
              )}
              {!image ? (
                <>
                  <Sc.IconContainer>
                    <IoCloudUploadOutline />
                    <Text
                      type="span"
                      as="span"
                      size="rgl"
                      weight="str"
                    >
                      Clique para adicionar uma imagem
                    </Text>
                  </Sc.IconContainer>
                  <Text
                    type="paragraph"
                    as="p"
                    size="rgl"
                    color="gray_200"
                    position="left"
                  >
                    Recomendação: Use JPG, JPEG, SVG, PNG de alta
                    qualidade, GIF ou TIFF com menos de 20 MB
                  </Text>
                </>
              ) : (
                <>
                  <Sc.ImageUploaded src={image} />
                  <Sc.Trash
                    onClick={(e) => {
                      resetField("image")
                      removeImage(e)
                    }}
                  >
                    <FaTrash />
                  </Sc.Trash>
                </>
              )}
              <Sc.Input
                type="file"
                {...imageRegister}
                onChange={(e) => {
                  imageRegister.onChange(e)
                  addImage(e.target.files, resetField)
                }}
              />
            </Sc.InnerWrapper>
          </Sc.UpperContent>
          <Sc.LowerContent>
            <Input
              name="title"
              type="text"
              placeholder="Titulo"
              control={control}
            />
            <Input
              name="sinopse"
              type="text"
              placeholder="Sinopse"
              control={control}
            />
            <Select
              name="category"
              control={control}
              options={[
                { id: 1, name: "Categoria 1" },
                { id: 2, name: "Categoria 2" },
                { id: 3, name: "Categoria 3" },
                { id: 4, name: "Categoria 4" },
                { id: 5, name: "Categoria 5" },
                { id: 6, name: "Categoria 6" },
              ]}
            />
            <Sc.WrapperErrorButton>
              <Sc.Button
                size="sml"
                background="blue"
                color="white"
                type="submit"
              >
                Salvar
              </Sc.Button>
            </Sc.WrapperErrorButton>
          </Sc.LowerContent>
        </Sc.Form>
      </Sc.Container>
    </Sc.MainContainer>
  )
}
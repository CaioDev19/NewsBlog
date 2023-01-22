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
import { useCreatePost } from "../../../hooks/react-query/mutation/useCreatePost"
import { useCategories } from "../../../hooks/react-query/query/useCategories"
import { Category } from "../../../interfaces/api"

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
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      summary: "",
      category: "",
      image: null as FileList | null,
    },
  })
  const { mutate, isLoading, isError: isPostError } = useCreatePost()
  const { isLoading: isCategoriesLoading, data: categories } =
    useCategories()
  const [body, setBody] = useState("")
  const imageRegister = register("image")

  function handleSucessSubmit(data: any) {
    if (body === "") {
      return
    }

    const { id: categoryId } = categories?.data.find((category) => {
      return category.name === data.category
    }) as Category

    const formData = new FormData()

    formData.append("image", data.image[0])
    formData.append("title", data.title)
    formData.append("summary", data.summary)
    formData.append("category_id", categoryId)
    formData.append("content", body)

    mutate(formData)
    reset()
    removeImage()
  }

  function handleErrorSubmit(error: any) {
    if (error.title) {
      resetField("title", {
        keepError: true,
      })
    }
    if (error.summary) {
      resetField("summary", {
        keepError: true,
      })
    }
    if (error.category) {
      resetField("category", {
        keepError: true,
      })
    }
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
              placeholder={errors?.title?.message || "Título"}
              control={control}
            />
            <Input
              name="summary"
              type="text"
              placeholder={errors?.summary?.message || "Resumo"}
              control={control}
            />
            <Select
              name="category"
              control={control}
              options={!isCategoriesLoading ? categories?.data! : []}
            />
            <Sc.WrapperErrorButton>
              {isPostError && (
                <Text
                  type="span"
                  as="span"
                  size="lrg"
                  color="orange_red"
                >
                  Erro ao criar post!
                </Text>
              )}
              <Sc.Button
                size="sml"
                background="blue"
                color="white"
                type="submit"
              >
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    variant="light"
                    size="sm"
                  />
                ) : (
                  "Salvar"
                )}
              </Sc.Button>
            </Sc.WrapperErrorButton>
          </Sc.LowerContent>
        </Sc.Form>
      </Sc.Container>
    </Sc.MainContainer>
  )
}

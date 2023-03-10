import * as Sc from "./style"
import { Spinner } from "react-bootstrap"
import { useImageAsBackground } from "../../hooks/useImageAsBackground"
import { Text } from "../../global/styles/Typography"
import { useForm } from "react-hook-form"
import { Input } from "../Form/Input"
import { Select } from "../Form/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { PostSchema } from "../../global/validators/postSchema"
import { Editor } from "../Editor"
import { useEffect, useState } from "react"
import { useCreatePost } from "../../hooks/react-query/mutation/useCreatePost"
import { useCategories } from "../../hooks/react-query/query/useCategories"
import { Category } from "../../interfaces/api"
import { useParams } from "react-router-dom"
import { useNew } from "../../hooks/react-query/query/useNew"
import { useUpdatePost } from "../../hooks/react-query/mutation/useUpdatePost"
import { ImageDisplay } from "../../pages/Admin/components/ImageDisplay"

interface Props {
  type: "create" | "edit"
}

export function CreatePost({ type }: Props) {
  const {
    handleSubmit,
    control,
    resetField,
    register,
    setValue,
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
  const {
    image,
    isLoading: isImageLoading,
    isError,
    addImage,
    removeImage,
  } = useImageAsBackground(resetField)
  const {
    mutate: mutateCreate,
    isLoading: isCreateLoading,
    isError: isPostError,
  } = useCreatePost()
  const {
    mutate: mutateEdit,
    isLoading: isEditLoading,
    isError: isUpdateError,
  } = useUpdatePost()
  const { isLoading: isCategoriesLoading, data: categories } =
    useCategories()
  const [body, setBody] = useState("")
  const { id } = useParams()
  const { data, isSuccess } = useNew({
    id: id as string,
    enabled: type === "edit" ? true : false,
  })
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
    formData.append("category_id", String(categoryId))
    formData.append("content", body)

    if (type === "create") {
      mutateCreate(formData)
      return
    }

    mutateEdit({ id: id as string, data: formData })
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

  function addImageOnDisplay(e: React.ChangeEvent<HTMLInputElement>) {
    imageRegister.onChange(e)
    addImage(e.target.files)
  }

  function removeImageFromDisplay(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    removeImage(e)
  }

  useEffect(() => {
    if (type === "edit" && isSuccess) {
      setValue("title", data?.data.title)
      setValue("summary", data?.data.summary)
      setValue("category", data?.data.category.name)
      setBody(data?.data.content)
    }
  }, [isSuccess, data?.data, type, setValue])

  return (
    <Sc.MainContainer>
      <Editor setBody={handleBody} body={body} />
      <Sc.Container>
        <Sc.Form
          onSubmit={handleSubmit(
            handleSucessSubmit,
            handleErrorSubmit
          )}
        >
          <ImageDisplay
            image={image}
            isLoading={isImageLoading}
            isError={isError || errors.image?.type === "custom"}
            ref={imageRegister.ref}
            register={imageRegister}
            addImage={addImageOnDisplay}
            removeImage={removeImageFromDisplay}
          />
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
              customPlaceholder="Selecione uma categoria"
            />
            <Sc.WrapperErrorButton>
              {(isPostError || isUpdateError) && (
                <Text
                  type="span"
                  as="span"
                  size="lrg"
                  color="orange_red"
                >
                  {isPostError
                    ? "Erro ao criar post!"
                    : "Erro ao editar post!"}
                </Text>
              )}
              <Sc.Button
                size="sml"
                background="blue"
                color="white"
                type="submit"
              >
                {isCreateLoading || isEditLoading ? (
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

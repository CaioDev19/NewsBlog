import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { IoCloudUploadOutline } from "react-icons/io5"
import { FaTrash } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AdvertisingSchema } from "../../../global/validators/advertising"
import { useImageAsBackground } from "../../../hooks/useImageAsBackground"
import { Spinner } from "react-bootstrap"
import { Button } from "../../../global/styles/Button"
import { useCreateAdvertising } from "../../../hooks/react-query/mutation/useCreateAdvertising"
import { usePaginetedAds } from "../../../hooks/react-query/query/usePaginetedAds"

export function Advertisement() {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AdvertisingSchema),
    defaultValues: {
      image: null as FileList | null,
    },
  })
  const {
    image,
    isLoading: isImageLoading,
    isError,
    addImage,
    removeImage,
  } = useImageAsBackground()
  const imageRegister = register("image")
  const {
    mutate,
    isLoading,
    isError: isAdvertisingError,
  } = useCreateAdvertising()
  const { data: ads, isLoading: isAdsLoading } = usePaginetedAds({})

  function handleSucessSubmit(data: any) {
    const formData = new FormData()
    formData.append("image", data.image[0])

    mutate(formData)
  }
  console.log(ads)

  return (
    <Sc.Container>
      <Sc.Form onSubmit={handleSubmit(handleSucessSubmit)}>
        <Sc.UpperContent>
          <Sc.InnerWrapper noPadding={!!image}>
            {isImageLoading && (
              <Spinner as="div" animation="border" variant="danger" />
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
                  <Text type="span" as="span" size="rgl" weight="str">
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
        <Sc.WrapperErrorButton>
          {isAdvertisingError && (
            <Text type="span" as="span" size="lrg" color="orange_red">
              Error ao salvar anúncio!
            </Text>
          )}
          <Button size="lrg" background="blue" color="white">
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
          </Button>
        </Sc.WrapperErrorButton>
      </Sc.Form>
      <Sc.AdsContainer>
        {!isAdsLoading && <div>cu</div>}
      </Sc.AdsContainer>
    </Sc.Container>
  )
}

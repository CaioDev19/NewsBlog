import * as Sc from "../../styles/Advertisement"
import { Text } from "../../global/styles/Typography"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AdvertisingSchema } from "../../global/validators/advertising"
import { useImageAsBackground } from "../../hooks/useImageAsBackground"
import { Spinner } from "react-bootstrap"
import { Button } from "../../global/styles/Button"
import { useCreateAdvertising } from "../../hooks/react-query/mutation/useCreateAdvertising"
import { usePaginatedAds } from "../../hooks/react-query/query/usePaginatedAds"
import { ImageDisplay } from "../../components/Admin/ImageDisplay"
import { Error } from "../../components/Error"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Ads } from "../Admin/components/Ads"
import { Select } from "../../components/Form/Select"
import { NextPage } from "next"

const Advertisement: NextPage = () => {
  const {
    handleSubmit,
    register,
    resetField,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AdvertisingSchema),
    defaultValues: {
      image: null as FileList | null,
      status: "",
    },
  })
  const {
    image,
    isLoading: isImageLoading,
    isError,
    addImage,
    removeImage,
  } = useImageAsBackground(resetField)
  const imageRegister = register("image")
  const {
    mutate,
    isLoading,
    isError: isAdvertisingError,
  } = useCreateAdvertising()
  const {
    data: ads,
    isSuccess: isAdsSuccess,
    fetchNextPage,
    fetchPreviousPage,
    currentPage,
  } = usePaginatedAds({
    limit: 6,
  })

  function handleSucessSubmit(data: any) {
    const formData = new FormData()
    formData.append("image", data.image[0])
    formData.append("status", data.status)

    mutate(formData)
    removeImage()
    reset()
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

  return (
    <Sc.Container>
      <Sc.Form onSubmit={handleSubmit(handleSucessSubmit)}>
        <ImageDisplay
          image={image}
          isLoading={isImageLoading}
          isError={isError || errors.image?.type === "custom"}
          ref={imageRegister.ref}
          register={imageRegister}
          addImage={addImageOnDisplay}
          removeImage={removeImageFromDisplay}
        />
        <Select
          name="status"
          control={control}
          options={[
            { id: 1, name: "Fixo" },
            { id: 2, name: "Móvel" },
          ]}
          customPlaceholder="Selecione o tipo de anúncio"
        />
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
        {isAdsSuccess ? (
          <Ads data={ads.data} />
        ) : (
          <Error
            size="lrg"
            message="Não foi possível carregar os anúncios!"
          />
        )}
      </Sc.AdsContainer>
      <Sc.ArrowsContainer>
        <Sc.Arrow onClick={fetchPreviousPage}>
          {currentPage > 1 && <FaArrowLeft />}
        </Sc.Arrow>
        <Sc.Arrow onClick={fetchNextPage}>
          {isAdsSuccess &&
            currentPage < ads.data.totalPages &&
            ads.data.totalPages > 0 && <FaArrowRight />}
        </Sc.Arrow>
      </Sc.ArrowsContainer>
    </Sc.Container>
  )
}

export default Advertisement

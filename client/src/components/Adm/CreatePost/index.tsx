import * as Sc from "./style"
import { Spinner } from "react-bootstrap"
import { useImageAsBackground } from "../../../hooks/useImageAsBackground"
import { Text } from "../../../global/styles/Typography"
import { IoCloudUploadOutline } from "react-icons/io5"
import { TrashCan } from "../../TrashCan"

export function CreatePost() {
  const {
    image,
    isLoading: isImageLoading,
    isError,
    addImage,
    removeImage,
  } = useImageAsBackground()
  return (
    <Sc.Form>
      <Sc.UpperContent>
        <Sc.InnerWrapper noPadding={!!image}>
          {isImageLoading && (
            <Spinner as="div" animation="border" variant="danger" />
          )}
          {isError && (
            <Text type="span" as="span" size="rgl" color="orange_red">
              File type not supported
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
              <TrashCan
                onClick={(e) => {
                  removeImage(e)
                }}
              />
            </>
          )}
          <Sc.Input
            type="file"
            name="image"
            onChange={(e) => addImage(e.target.files)}
          />
        </Sc.InnerWrapper>
      </Sc.UpperContent>
      <Sc.LowerContent>
        <Sc.SInput
          name="description"
          type="text"
          placeholder="Sinopse"
        />
        <Sc.SInput
          name="title"
          type="text"
          placeholder="Categórias"
        />
        <Sc.WrapperErrorButton>
          <Sc.Button>Salvar</Sc.Button>
        </Sc.WrapperErrorButton>
      </Sc.LowerContent>
    </Sc.Form>
  )
}

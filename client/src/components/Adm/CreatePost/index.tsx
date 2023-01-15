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
    <Sc.Container>
      <Sc.Form>
        <Sc.UpperContent>
          <Sc.InnerWrapper noPadding={!!image}>
            {isImageLoading && (
              <Spinner as="div" animation="border" variant="danger" />
            )}
            {isError && (
              <Text
                type="span"
                as="span"
                size="rgl"
                color="orange_red"
              >
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
          <Sc.SInput name="tittle" type="text" placeholder="Titulo" />
          <Sc.SInput
            name="description"
            type="text"
            placeholder="Sinopse"
          />
          <Sc.Select name="category" defaultValue="">
            <option value="" disabled>
              Selecione uma categoria
            </option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
            <option value="4">Categoria 4</option>
            <option value="5">Categoria 5</option>
            <option value="6">Categoria 6</option>
          </Sc.Select>
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
  )
}

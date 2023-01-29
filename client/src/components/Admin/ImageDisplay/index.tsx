import * as Sc from "./style"
import { forwardRef } from "react"
import { Text } from "../../../global/styles/Typography"
import { IoCloudUploadOutline } from "react-icons/io5"
import { FaTrash } from "react-icons/fa"
import { Spinner } from "react-bootstrap"
import { UseFormRegisterReturn } from "react-hook-form"

interface Props {
  image: string | null
  isLoading: boolean
  isError: boolean
  addImage: (e: React.ChangeEvent<HTMLInputElement>) => void
  removeImage: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  register: UseFormRegisterReturn<"image">
}

export const ImageDisplay = forwardRef<HTMLInputElement, Props>(
  (
    {
      image,
      isLoading,
      isError,
      addImage,
      removeImage,
      register: { ref: regRegister, ...registerWithoutRef },
    },
    ref
  ) => {
    return (
      <Sc.UpperContent>
        <Sc.InnerWrapper noPadding={!!image}>
          {isLoading && (
            <Spinner as="div" animation="border" variant="danger" />
          )}
          {isError && (
            <Text type="span" as="span" size="rgl" color="orange_red">
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
                  removeImage(e)
                }}
              >
                <FaTrash />
              </Sc.Trash>
            </>
          )}
          <Sc.Input
            type="file"
            ref={ref}
            {...registerWithoutRef}
            onChange={(e) => {
              addImage(e)
            }}
          />
        </Sc.InnerWrapper>
      </Sc.UpperContent>
    )
  }
)

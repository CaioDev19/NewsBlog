import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { IoCloudUploadOutline } from "react-icons/io5"
import { FaTrash } from "react-icons/fa"

export function Advertisement() {
  const image = ""
  return (
    <Sc.Container>
      <Sc.UpperContent>
        <Sc.InnerWrapper noPadding={!!image}>
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
              <Sc.Trash>
                <FaTrash />
              </Sc.Trash>
            </>
          )}
          <Sc.Input type="file" />
        </Sc.InnerWrapper>
      </Sc.UpperContent>
    </Sc.Container>
  )
}

import * as Sc from "./style"
import { MouseEvent } from "react"
import { FaTrash } from "react-icons/fa"

interface Props {
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  className?: string
}

export function TrashCan({ onClick, className }: Props) {
  return (
    <Sc.TrashCanContainer onClick={onClick} className={className}>
      <FaTrash />
    </Sc.TrashCanContainer>
  )
}

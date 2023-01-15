import { CreatePost } from "../../components/Adm/CreatePost"
import { Quill } from "../../components/Editor"
import * as Sc from "./style"

export function Adm() {
  return (
    <Sc.Container>
      <Quill />
      <CreatePost />
    </Sc.Container>
  )
}

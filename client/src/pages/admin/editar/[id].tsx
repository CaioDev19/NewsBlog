import { CreatePost } from "../../../components/CreatePost"
import { MainNavigation } from "../../../components/MainNavigation"
import { NextPageWithLayout } from "../../_app"

const EditNews: NextPageWithLayout = () => {
  return <CreatePost type="edit" />
}

EditNews.getLayout = (page) => {
  return <MainNavigation>{page}</MainNavigation>
}

export default EditNews

import { CreatePost } from "../../components/CreatePost"
import { MainNavigation } from "../../components/MainNavigation"
import { NextPageWithLayout } from "../_app"

const CreateNews: NextPageWithLayout = () => {
  return <CreatePost type="create" />
}

CreateNews.getLayout = (page) => {
  return <MainNavigation>{page}</MainNavigation>
}

export default CreateNews

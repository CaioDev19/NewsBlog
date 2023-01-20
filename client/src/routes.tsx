import { Route, Routes } from "react-router-dom"
import { MainNavigation } from "./components/MainNavigation"
import { CreatePost } from "./pages/Admin/CreatePost"
import { Home } from "./pages/Home"
import { Login } from "./pages/Admin/Login"
import { PostDetail } from "./pages/PostDetail"
import { PostsByCategory } from "./pages/PostsByCategory"
import { PrivateRoutes } from "./utils/PrivateRoutes"
import { ScrollToTop } from "./utils/ScrollToTop"

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route element={<ScrollToTop />}>
          <Route path="/" element={<Home />} />
          <Route path="/post">
            <Route path=":id" element={<PostDetail />} />
            <Route
              path="category/:category"
              element={<PostsByCategory />}
            />
          </Route>
          <Route path="/admin">
            <Route element={<PrivateRoutes />}>
              <Route path="createPost" element={<CreatePost />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  )
}

import { Navigate, Route, Routes } from "react-router-dom"
import { MainNavigation } from "./components/MainNavigation"
import { CreatePost } from "./pages/Admin/CreatePost"
import { Home } from "./pages/Home"
import { Login } from "./pages/Admin/Login"
import { PostDetail } from "./pages/PostDetail"
import { PostsByCategory } from "./pages/PostsByCategory"
import { PrivateRoutes } from "./utils/PrivateRoutes"
import { ScrollToTop } from "./utils/ScrollToTop"
import { ResetPassword } from "./pages/Admin/Login/ResetPassword"
import { Advertisement } from "./pages/Admin/Advertisement"
import { AboutUs } from "./pages/AboutUs"

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route element={<ScrollToTop />}>
          <Route path="/" element={<Home />} />
          <Route path="/noticia">
            <Route path=":id" element={<PostDetail />} />
            <Route
              path="categoria/:categoryId"
              element={<PostsByCategory />}
            />
          </Route>
          <Route path="/admin">
            <Route index element={<Navigate to="/" />} />
            <Route element={<PrivateRoutes />}>
              <Route
                path="criar-noticia"
                element={<CreatePost type="create" />}
              />
              <Route path="anuncio" element={<Advertisement />} />
              <Route
                path="editar/:id"
                element={<CreatePost type="edit" />}
              />
            </Route>
          </Route>
          <Route path="/sobre-nos" element={<AboutUs />} />
        </Route>
      </Route>
      <Route path="/admin">
        <Route path="login" element={<Login />} />
        <Route path="redefinir-senha" element={<ResetPassword />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

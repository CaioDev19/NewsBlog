import { Route, Routes } from "react-router-dom"
import { MainNavigation } from "./components/MainNavigation"
import { Adm } from "./pages/Adm"
import { Home } from "./pages/Home"
import { PostDetail } from "./pages/PostDetail"
import { PostsByCategory } from "./pages/PostsByCategory"
import { ScrollToTop } from "./services/ScrollToTop"

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route element={<ScrollToTop />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route
            path="/post/category/:category"
            element={<PostsByCategory />}
          />
          <Route path="/adm" element={<Adm />} />
        </Route>
      </Route>
    </Routes>
  )
}

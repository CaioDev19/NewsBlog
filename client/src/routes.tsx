import { Route, Routes } from "react-router-dom"
import { MainNavigation } from "./components/MainNavigation"
import { Adm } from "./pages/Adm"
import { Home } from "./pages/Home"
import { PostDetail } from "./pages/PostDetail"
import { ScrollToTop } from "./services/ScrollToTop"

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route element={<ScrollToTop />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/adm" element={<Adm />} />
        </Route>
      </Route>
    </Routes>
  )
}

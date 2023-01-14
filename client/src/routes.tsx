import { Route, Routes } from "react-router-dom"
import { MainNavigation } from "./components/MainNavigation"
import { Home } from "./pages/Home"
import { PostDetail } from "./pages/PostDetail"

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}

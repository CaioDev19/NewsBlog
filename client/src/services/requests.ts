import { api } from "./api"
import { AxiosResponse } from "axios"
import { Article, Category, News } from "../interfaces/api"
import { QueryFunctionContext } from "@tanstack/react-query"

export function getNews({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(`/post/?page=${queryKey[1]}&limit=${queryKey[2]}`)
}
export function getNew({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<Article>> {
  return api.get(`/post/${queryKey[1]}`)
}
export function getNewByCategory({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(
    `/post/?categoryId=${queryKey[3]}&limit=${queryKey[2]}&page=${queryKey[1]}`
  )
}
export function listCategories(): Promise<AxiosResponse<Category[]>> {
  return api.get("/category")
}
export function createNew(
  data: FormData
): Promise<AxiosResponse<Article>> {
  return api.post("/admin/post", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
export function deleteNew(
  id: string | number
): Promise<AxiosResponse> {
  return api.delete(`admin/post/${id}`)
}
